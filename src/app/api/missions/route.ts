import { NextResponse } from "next/server";
import dbConnect from "@/app/config/dbConnect";
import Mission from "@/app/models/Mission";

// Handler untuk POST /api/mission - Membuat Misi Baru
export async function POST(request: Request) {
  await dbConnect();

  try {
    const data = await request.json();

    const { name, geometry, properties } = data;

    // Validasi input
    if (
      !name ||
      !geometry ||
      !geometry.type ||
      !geometry.coordinates ||
      !Array.isArray(geometry.coordinates)
    ) {
      return NextResponse.json(
        { success: false, message: "Invalid GeoJSON format" },
        { status: 400 }
      );
    }

    // Membuat dan menyimpan mission baru
    const mission = new Mission({ name, geometry, properties });
    await mission.save();

    return NextResponse.json(
      { success: true, message: "Mission saved successfully", mission },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error saving mission:", error);
    return NextResponse.json({ success: false, message: "Server error" }, { status: 500 });
  }
}


// Handler untuk GET /api/mission - Mendapatkan Semua Misi
export async function GET() {
  await dbConnect();

  try {
    const missions = await Mission.find();
    return NextResponse.json({ success: true, missions }, { status: 200 });
  } catch (error) {
    console.error("Error fetching missions:", error);
    return NextResponse.json({ success: false, message: "Server error" }, { status: 500 });
  }
}

// Handler untuk DELETE /api/mission - Menghapus Misi Berdasarkan ID
export async function DELETE(request: Request) {
  await dbConnect();

  try {
    // Parsing URL dan mengambil parameter `id`
    const url = new URL(request.url);
    const id = url.searchParams.get("id");

    if (!id) {
      return NextResponse.json({ success: false, message: "Mission ID is required" }, { status: 400 });
    }

    // Mencari dan menghapus mission berdasarkan ID
    const deletedMission = await Mission.findByIdAndDelete(id);
    if (!deletedMission) {
      return NextResponse.json({ success: false, message: "Mission not found" }, { status: 404 });
    }

    return NextResponse.json({ success: true, message: "Mission deleted successfully" }, { status: 200 });
  } catch (error) {
    console.error("Error deleting mission:", error);
    return NextResponse.json({ success: false, message: "Server error" }, { status: 500 });
  }
}
