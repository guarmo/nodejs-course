const Course = require('../models/Course')
const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middlewares/async");

// @desc        Get all courses
// @route       GET /api/v1/courses
// @route       GET /api/v1/bootcamps/:bootcampId/courses
// @access      Public
exports.getCourses = asyncHandler(async (req, res, next) => {
    let query;

    if(req.params.bootcampId) {
        query = Course.find({ bootcamp: req.params.bootcampId })
    } else {
        query = Course.find();
    }

    const courses = await query;

    res.status(200).json({
        success: true,
        count: courses.length,
        data: courses
    })
    
    // const courses = Course.find();

    // res.status(200).json({
    //     success: true,
    //     data: courses
    // })
})

// @desc        Get single course
// @route       GET /api/v1/courses/:id
// @access      Public
exports.getCourse = asyncHandler(async (req, res, next) => {
    res.status(200).json({
        data: 'Get course'
    })
})

// @desc        Create new course
// @route       POST /api/v1/courses
// @access      Private
exports.createCourse = asyncHandler(async (req, res, next) => {
    res.status(200).json({
        data: 'Create new course'
    })
})

// @desc        Update course
// @route       PUT /api/v1/courses
// @access      Private
exports.updateCourse = asyncHandler(async (req, res, next) => {
    res.status(200).json({
        data: 'Update course'
    })
})

// @desc        Delete course
// @route       DELETE /api/v1/courses/:id
// @access      Private
exports.deleteCourse = asyncHandler(async (req, res, next) => {
    res.status(200).json({
        data: 'Delete course'
    })
})