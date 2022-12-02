function exibirP(){
    let vi=parseInt(document.getElementById('vi').value);
    let res=document.getElementById('res');

    res.innerHTML="";

    for(let i=1; i <= vi; i++){

        if(i%2==0){
            res.innerHTML+=i+"-";
        }
    }
}