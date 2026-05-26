import mongoose from "mongoose";
import dotenv from "dotenv";
import Product from "./models/productModels.js";
import User from "./models/userModel.js";

// Load environment variables
dotenv.config({ path: "config/config.env" });

const sampleProducts = [
  {
    title: "Shree Ram Boys PG",
    propertyType: "PG",
    forWhom: "Boys",
    description: "A well-maintained boys PG near BVB College with excellent food and high-speed internet. Ideal for students and working professionals.",
    startingRent: 4500,
    roomTypes: { single: 8000, twin: 6000, triple: 5000, fourSharing: 4500 },
    locality: "Vidya Nagar",
    city: "Hubli",
    fullAddress: "Near BVB College Main Gate, Vidya Nagar, Hubli, Karnataka",
    latitude: 15.3712,
    longitude: 75.1235,
    images: [{ publicId: "hubli_pg_1", url: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=800" }],
    totalRooms: 15,
    availableBeds: 6,
    amenities: ["WiFi", "Food", "Power Backup", "Washing Machine"],
    phoneNumber: "9876543210",
  },
  {
    title: "Dharwad University Girls Hostel",
    propertyType: "Hostel",
    forWhom: "Girls",
    description: "Strict, secure, and highly comfortable hostel for university girls. 24/7 security guard and biometrics.",
    startingRent: 4000,
    roomTypes: { single: 7000, twin: 5500, triple: 4500, fourSharing: 4000 },
    locality: "Srinagar",
    city: "Dharwad",
    fullAddress: "Opposite Karnatak University, Srinagar, Dharwad, Karnataka",
    latitude: 15.4414,
    longitude: 74.9856,
    images: [{ publicId: "dharwad_hostel_1", url: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&q=80&w=800" }],
    totalRooms: 25,
    availableBeds: 12,
    amenities: ["WiFi", "Food", "CCTV", "Study Room"],
    phoneNumber: "9876543211",
  },
  {
    title: "Navanagar Premium Flat",
    propertyType: "Flat",
    forWhom: "Both",
    description: "Fully furnished 2BHK flat available for rent. Perfect for small families or working couples.",
    startingRent: 12000,
    roomTypes: { single: 12000, twin: 0, triple: 0, fourSharing: 0 },
    locality: "Navanagar",
    city: "Hubli",
    fullAddress: "Navanagar Main Road, Hubli, Karnataka",
    latitude: 15.3900,
    longitude: 75.1000,
    images: [{ publicId: "hubli_flat_1", url: "https://images.unsplash.com/photo-1502672260266-1c1de2d9326d?auto=format&fit=crop&q=80&w=800" }],
    totalRooms: 2,
    availableBeds: 4,
    amenities: ["AC", "Modular Kitchen", "Car Parking", "Lift"],
    phoneNumber: "9876543212",
  },
  {
    title: "Sattur Private Room",
    propertyType: "Room",
    forWhom: "Boys",
    description: "Independent private room with attached washroom near SDM Medical College.",
    startingRent: 6500,
    roomTypes: { single: 6500, twin: 0, triple: 0, fourSharing: 0 },
    locality: "Sattur",
    city: "Dharwad",
    fullAddress: "Near SDM College, Sattur, Dharwad, Karnataka",
    latitude: 15.4200,
    longitude: 75.0200,
    images: [{ publicId: "dharwad_room_1", url: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=800" }],
    totalRooms: 5,
    availableBeds: 2,
    amenities: ["WiFi", "Attached Washroom", "Geyser"],
    phoneNumber: "9876543213",
  }
];

const seedDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ MongoDB Connected!");

    console.log("🧹 Clearing existing products...");
    await Product.deleteMany();
    
    // Find an admin user to be the owner
    let admin = await User.findOne({ role: "admin" });
    if (!admin) {
        admin = await User.findOne(); // Fallback to any user if no admin
    }
    
    if(!admin) {
        console.log("❌ No user found! Please register a user first through the app to assign as property owner.");
        process.exit();
    }

    console.log(`👤 Using user ${admin.name || admin.email} as property owner.`);

    const productsWithOwner = sampleProducts.map(p => ({ ...p, owner: admin._id }));

    await Product.insertMany(productsWithOwner);
    console.log("🎉 Database seeded successfully with sample properties!");
    process.exit();
  } catch (error) {
    console.error("❌ Seeding Error:", error);
    process.exit(1);
  }
};

seedDB();
