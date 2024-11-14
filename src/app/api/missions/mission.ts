import { NextResponse } from "next/server";
import dbConnect from "@/app/config/dbConnect";
import Mission from "@/app/models/Mission";

// Handler untuk POST /api/mission - Membuat Misi Baru
export async function POST(request: Request) {
  await dbConnect();
  
  try {
    const { name, coordinates } = await request.json();

    if (!name || !coordinates || !Array.isArray(coordinates)) {
      return NextResponse.json({ success: false, message: "Invalid input" }, { status: 400 });
    }

    const mission = new Mission({ name, coordinates });
    await mission.save();

    return NextResponse.json({ success: true, message: "Mission saved successfully" }, { status: 201 });
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
  
      await Mission.findByIdAndDelete(id);
      return NextResponse.json({ success: true, message: "Mission deleted successfully" }, { status: 200 });
    } catch (error) {
      console.error("Error deleting mission:", error);
      return NextResponse.json({ success: false, message: "Server error" }, { status: 500 });
    }
  }
  
