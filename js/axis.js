class AxisManager {
    constructor() {
      this.beforeAngle = [0, 0];
      this.setCurrentAngle([0, 0]);
      this.beforeTimeStamp = 0;
      this.currentTimeStamp = 0;
      this.releaseTime = 0;
      this.releaseTimeCount = [0, 0];
      this.beforeFixedMoveDirection = [0, 0];
    }

    setReleaseTime(releaseTime){
        this.releaseTime = releaseTime;
    }

    setCurrentAngle(angles, timeStamp){
        this.currentAngle = angles;
        this.currentTimeStamp = timeStamp;
    }

    getCurrentAngle(index){
        return this.currentAngle[index];   
    }

    goNextFrame(){
        let diffTime = this.currentTimeStamp - this.beforeTimeStamp;
        for(let i = 0; i < 2; i++){
            this.releaseTimeCount[i] += diffTime / 1000;
            if(this.isMove(i)){
                this.releaseTimeCount[i] = 0;
            }
        }
        this.beforeFixedMoveDirection = [this.getFixedMoveDirection(0), this.getFixedMoveDirection(1)]
        this.beforeAngle = this.currentAngle;
        this.beforeTimeStamp = this.currentTimeStamp;
    }

    isMove(index){
        return this.currentAngle[index] != this.beforeAngle[index];
    }

    isMoveFixed(index){
        if(this.isMove(index)){
            return true;
        }else{
            if(this.releaseTimeCount[index] <= this.releaseTime){
                return true;
            }else{
                return false;
            }
        }
    }

    getMoveDirection(index){
        if(!this.isMove(index)){
            return 0;
        }

        if(this.beforeAngle[index] * this.currentAngle[index] < 0){
            if(Math.abs(this.beforeAngle[index]) + Math.abs(this.currentAngle[index]) < 1){
                return 1;
            }else{
                return -1;
            }
        }else{
            if(this.currentAngle[index] - this.beforeAngle[index] > 0){
                return 1;
            }else{
                return -1;
            }
        }
    }

    getFixedMoveDirection(index){
        let normalResult = this.getMoveDirection(index);
        if(normalResult != 0){
            return normalResult;
        }else{
            if(this.releaseTimeCount[index] <= this.releaseTime){
                return this.beforeFixedMoveDirection[index];
            }else{
                return normalResult;
            }
        }
    }
}

const axisManager = new AxisManager();
