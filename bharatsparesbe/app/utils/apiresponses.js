export default class ApiResponse {
    constructor(success= true, message= "Success", data) {
        this.success = success
        this.message = message
        this.data = data
    }
}