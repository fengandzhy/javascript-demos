const ajax = (url,success,fail)=>{
    const xhr = new XMLHttpRequest;
    xhr.open('GET',url);
    xhr.onreadystatechange=function(){
        if(this.readyState == 4){
            if(this.status == 200){
                success(this.response);
            }else{
                fail(new Error(this.statusText))
            }
        }
    }
}

function success(value) {
    console(value);
}

function fail(value){
    console.log(value);
}

ajax('./files/hello.txt',success,fail);


