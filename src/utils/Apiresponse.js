class ApiResponse{
constructor(statusCode,message="success",data){
        this.statusCode=statusCode;
        this.message=message;
        this.data=data;
        this.success=400<statusCode

    }
}
export {ApiResponse}