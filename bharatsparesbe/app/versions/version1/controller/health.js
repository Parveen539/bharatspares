export const health = async (req, res) => {
    res.status(200).json({success : true, message : "Service Health is Good"})
}