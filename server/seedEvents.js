const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Event = require("./models/Event");

dotenv.config();

const events = [
  { name: "Tech Conference", organizer: "BellCorp", location: "Hyderabad", date: "2026-03-20", description: "Tech talks", capacity: 50, category: "Technology" },
  { name: "Marketing Meetup", organizer: "BellCorp", location: "Mumbai", date: "2026-03-25", description: "Marketing insights", capacity: 30, category: "Marketing" },
  { name: "AI Workshop", organizer: "BellCorp", location: "Bangalore", date: "2026-04-05", description: "AI talks", capacity: 40, category: "Technology" },
  { name: "Startup Pitch", organizer: "BellCorp", location: "Delhi", date: "2026-04-12", description: "Pitch your startup", capacity: 60, category: "Startup" },
  { name: "Design Sprint", organizer: "BellCorp", location: "Chennai", date: "2026-04-18", description: "UI/UX workshop", capacity: 25, category: "Design" },
  { name: "Cloud Summit", organizer: "BellCorp", location: "Hyderabad", date: "2026-05-01", description: "Cloud computing", capacity: 50, category: "Technology" },
  { name: "Data Science Bootcamp", organizer: "BellCorp", location: "Mumbai", date: "2026-05-10", description: "Data Science course", capacity: 35, category: "Data" },
  { name: "Leadership Talk", organizer: "BellCorp", location: "Bangalore", date: "2026-05-15", description: "Leadership skills", capacity: 40, category: "Management" },
  { name: "FinTech Seminar", organizer: "BellCorp", location: "Delhi", date: "2026-05-20", description: "FinTech updates", capacity: 50, category: "Finance" },
  { name: "Digital Marketing", organizer: "BellCorp", location: "Chennai", date: "2026-06-01", description: "Marketing workshop", capacity: 30, category: "Marketing" },
  { name: "Blockchain Basics", organizer: "BellCorp", location: "Hyderabad", date: "2026-06-10", description: "Introduction to Blockchain", capacity: 45, category: "Technology" },
  { name: "HR Summit", organizer: "BellCorp", location: "Mumbai", date: "2026-06-15", description: "HR trends and practices", capacity: 35, category: "Management" },
  { name: "Creative Writing Workshop", organizer: "BellCorp", location: "Bangalore", date: "2026-06-20", description: "Improve your writing skills", capacity: 25, category: "Education" },
  { name: "Entrepreneur Meetup", organizer: "BellCorp", location: "Delhi", date: "2026-06-25", description: "Networking for entrepreneurs", capacity: 50, category: "Startup" },
  { name: "Photography Basics", organizer: "BellCorp", location: "Chennai", date: "2026-07-01", description: "Learn photography", capacity: 20, category: "Design" },
  { name: "Cybersecurity Seminar", organizer: "BellCorp", location: "Hyderabad", date: "2026-07-05", description: "Protect your data", capacity: 40, category: "Technology" },
  { name: "Social Media Marketing", organizer: "BellCorp", location: "Mumbai", date: "2026-07-10", description: "Grow your brand online", capacity: 30, category: "Marketing" },
  { name: "Product Management Workshop", organizer: "BellCorp", location: "Bangalore", date: "2026-07-15", description: "Manage products efficiently", capacity: 35, category: "Management" },
  { name: "Investment Strategies", organizer: "BellCorp", location: "Delhi", date: "2026-07-20", description: "Finance and investment tips", capacity: 40, category: "Finance" },
  { name: "Art & Design Expo", organizer: "BellCorp", location: "Chennai", date: "2026-07-25", description: "Exhibition for art lovers", capacity: 30, category: "Design" }
];

mongoose.connect(process.env.MONGO_URI)
  .then(async () => {
    console.log("MongoDB connected. Seeding events...");

    await Event.deleteMany(); // Clear previous events
    await Event.insertMany(events);

    console.log("Events seeded successfully!");
    process.exit();
  })
  .catch(err => {
    console.error("MongoDB connection error:", err);
    process.exit(1);
  });
