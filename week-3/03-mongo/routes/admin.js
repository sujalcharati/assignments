const  express = require("express");
const adminMiddleware = require("../middleware/admin");
const router = express.Router();
const { Admin , Course} = require("../db");

// Admin Routes
router.post('/signup', async (req, res) => {
    // Implement admin signup logic
    const username =req.body.username;
    const password = req.body.password;
    await Admin.create({
        username: username,
        password:password
    })
    res.json({
        msg: "admin created succesfully " 
    })
});

router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic
      const title =req.body.title;
      const description =req.body.description;
      const imageLink =req.body.imageLink;
      const price =req.body.price;

      const newcourse = await Course.create({
        title,
        description,
        imageLink,
        price
      })
      res.json({
        msg:" course created succesfully", courseId :newcourse._id
      })
});

router.get('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic
    const getcourse = await Course.find({});
    res.json({
        courses:getcourse
    })
});

module.exports = router;