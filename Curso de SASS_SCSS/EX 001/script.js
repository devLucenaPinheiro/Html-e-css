array = [20, 12, 31, 63, 24, 55]

max = array[0]


for(i = 0; i < array.length; i++){
    if(array[i] > max){
         max = array[i]
    }
}
document.write(max)
