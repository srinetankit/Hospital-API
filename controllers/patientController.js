// Importing the report and user models for report and user-related actions
const Report = require('../models/reports');
const User = require('../models/user')

// Controller function to handle patient registration
module.exports.register = async function (req, res) {
    try {

        let user = await User.findOne({ username: req.body.number })

        if (user) {
            return res.status(200).json(
                {
                    message: 'User Already Registered',
                    data: {
                        user: user
                    }
                })

        }

        // Creating a new patient user with the provided data
        user = await User.create({
            username: req.body.number,
            name: req.body.name,
            password: '12345',
            type: 'Patient'
        });

        return res.status(201).json(
            {
                message: 'Patient registered successfully',
                data: user
            })

    } catch (error) {
        console.log(error);
        return res.status(500).json(
            {
                message: "Internal Server Error"
            }
        );
    }


}


// Controller function to handle report creation for a patient
module.exports.createReport = async function (req, res) {
    try {

        // Finding the patient using the provided ID
        const user = await User.findById(req.params.id)

        if (!user) {
            return res.status(422).json(
                {
                    message: "Patient Does not exist"
                })

        }

        report = await Report.create({
            createdByDoctor: req.user.id,
            patient: req.params.id,
            status: req.body.status,
            date: new Date()
        })

        // Adding the newly created report to the patients reports array
        user.reports.push(report)


        // Returning a success status and the created report's data upon successful creation
        return res.status(201).json(
            {
                message: 'Report created successfully',
                data: report
            })

        // Handling and logging any errors that occur during the process
    } catch (error) {
        console.log(error);
        return res.status(500).json(
            {
                message: "Internal Server Error"
            }
        );
    }


}

module.exports.patientReports = async function (req, res) {
    try {
        const reports = await Report.find({ patient: req.params.id }).populate('createdByDoctor').sort('date')




        const reportData = reports.map(report => {
            const originalDate = report.date;
            const dateObj = new Date(originalDate);

            const formattedDate = dateObj.toLocaleString("en-US", {
                year: "numeric",
                month: "2-digit",
                day: "2-digit",
                hour: "2-digit",
                minute: "2-digit",
                hour12: false
            });

            return {
                createdByDoctor: report.createdByDoctor.name,
                status: report.status,
                date: formattedDate
            };
        });

        return res.status(200).json(
            {
                message: `List of Reports of User with id -  ${req.params.id}`,
                reports: reportData
            })

    } catch (error) {
        console.log(error);
        return res.status(500).json(
            {
                message: "Internal Server Error"
            }
        );
    }


}