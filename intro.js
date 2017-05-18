
                console.log("Introduction to JavaScript");
            
            
                function fizzBuzz(){
                var i;
            for( i = 1; i < 101; i++){
                if(i % 5 === 0 && i % 3 === 0){
                console.log("fizzbuzz");
                 }else if(i % 5 === 0 && i % 3 !== 0){
                    console.log("buzz");
                 }else if(i % 3 === 0){
                    console.log("fizz");
                }else{
                console.log(i);
            }
            }
                }
                    fizzBuzz();
                function countBs(wordToCount){
                    var counter = countChar(wordToCount, "B");
                    return counter;
                }
                countBs("Bobs Brown Burgers");
                function countChar(wordToCount, charToCount){
                    var count = 0;
                    var looper;
                    for(looper = 0; looper < wordToCount.length; looper++){
                        var letter = wordToCount.charAt(looper);
                        if(letter === charToCount){
                            count++;
                        }
                    }
                    return count;
                }
                countChar("I love everything.", "e");
