// Importing the Report model for report-related actions
const Report = require('../models/reports')

// Controller function to retrieve filtered reports by status
module.exports.filteredReports = async function (req, res) {
    try {

        // Finding reports with the provided status
        const reports = await Report.find({ status: req.params.status })

        // Returning a success status and the filtered reports
        return res.status(200).json(
            {
                message: `List of Reports with status ${req.params.status}`,
                reports: reports
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