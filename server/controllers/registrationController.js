const Registration = require("../models/Registration");
const Event = require("../models/Event");

exports.registerEvent = async (req, res) => {
  try {
    const eventId = req.params.id;
    const userId = req.user._id;

    const event = await Event.findById(eventId);
    if (!event) return res.status(404).json({ message: "Event not found" });

    // Check capacity
    const registrationsCount = await Registration.countDocuments({ event: eventId });
    if (registrationsCount >= event.capacity)
      return res.status(400).json({ message: "Event is full" });

    // Check if already registered
    const existingReg = await Registration.findOne({ user: userId, event: eventId });
    if (existingReg)
      return res.status(400).json({ message: "Already registered for this event" });

    const registration = await Registration.create({ user: userId, event: eventId });
    res.status(201).json(registration);
  } catch (error) {
    console.error("Register event error:", error);
    res.status(500).json({ message: "Server error during registration" });
  }
};

exports.getRegistrations = async (req, res) => {
  try {
    const registrations = await Registration.find({ user: req.user._id }).populate("event");
    res.json(registrations);
  } catch (error) {
    console.error("Get registrations error:", error);
    res.status(500).json({ message: "Server error fetching registrations" });
  }
};
