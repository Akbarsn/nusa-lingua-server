const router = require('express').Router()
const {
    GetCourseDetailByID,
    JoinCourse,
    NextTopic,
    GetTopicByID,
    TakeExam,
    PostExam
} = require('../handler/course')

router.get('/:id', GetCourseDetailByID)

router.get('/join/:id', JoinCourse)

router.get('/topic/:courseID/:topicID', GetTopicByID)

router.get('/next/:courseID/:topicID', NextTopic)

router.get('/exam/:courseID', TakeExam)

router.post('/exam/:courseID', PostExam)

module.exports = router