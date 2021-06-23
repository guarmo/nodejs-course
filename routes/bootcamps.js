const express = require("express");
const {
    getBootcamps,
    getBootcamp,
    createBootcamp,
    updateBootcamp,
    deleteBootcamp,
    getBootcampsInRadius
} = require("../controllers/bootcamps");

const router = express.Router();

router.route('/radius/:zipcode/:distance').get(getBootcampsInRadius);
router.route('/').get(getBootcamps).post(createBootcamp)
router.route('/:id').get(getBootcamp).put(updateBootcamp).delete(deleteBootcamp)

// router.get('/', (req, res) => {
// res.send('Hello from express');
// res.status(400).json({ success: false })
// res.status(200).json({ success: true })
// })

// router.get("/", (req, res) => {
//   res.status(200).json({ success: true, data: { msg: "Show all bootcamps" } });
// });

// router.get("/:id", (req, res) => {
//   res
//     .status(200)
//     .json({ success: true, data: { msg: `Show bootcamp ${req.params.id}` } });
// });

// router.post("/", (req, res) => {
//   res.status(200).json({ success: true, data: { msg: "Create new bootcamp" } });
// });

// router.put("/:id", (req, res) => {
//   res
//     .status(200)
//     .json({ success: true, data: { msg: `Update bootcamp ${req.params.id}` } });
// });

// router.delete("/:id", (req, res) => {
//   res
//     .status(200)
//     .json({ success: true, data: { msg: `Delete bootcamp ${req.params.id}` } });
// });

module.exports = router;
