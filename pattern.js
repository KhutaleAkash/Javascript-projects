function starpattern(n){
    for(i=0;i<n;i++){
        let row=''
        for(j=0;j<n;j++){
            row+=" * "
        }
        console.log(row)
    }
}

function triangle(n){
    for(i=0;i<n;i++){
        line=''
        for(j=0;j<=i;j++){
            line+="* "
        }
        console.log(line)
    }
}

function InvertedTriangle(n){
    for(i=n;i>=0;i--){
        row=''
        for(j=0;j<i;j++){
            row+='* '
        }
        console.log(row)
    }
}

function pyramid(n)
{
    for(i=0;i<n;i++){
        

    }
}
starpattern(5)
triangle(5)
InvertedTriangle(5)