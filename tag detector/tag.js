var string ='';
var stack = [];
var comment;


  function tag(line) {

    //Read a character by character
    for (var i = 0; i < line.length; i++) {

        //find closing angle bracket first
        if(line.charAt(i)=='<' && line.charAt(i+1)=='/'){

            i+=2;

            //Find correct closing tag
            if (line.charAt(i)==stack[stack.length-1]){

                stack.pop();
                i++;
            }
            else{

                //Stack is empty but there is an extra closing tag
                if (stack.length==0){

                    //Print the error
                    comment = 'Expected # found </'+ line[i]+ '>'
                    
                    //Reset for index i and stack for this line
                    i=line.length;
                    stack.length=0;
                    return comment;
                    
                }
                //Stack is not empty but there is nesting error
                else {

                    comment ='Expected </'+ line[i]+'> found </'+stack[stack.length-1]+'>';

                    //Reset for index i and stack for this line
                    i=line.length;
                    stack.length=0;
                    return comment;
                }
            }
        }

        else if (line.charAt(i)=='<'){
            i++;

            //Find an upper case alphabet
            if (line.charAt(i).charCodeAt(0)<=90 &&line.charAt(i).charCodeAt(0)>=65){

                string = line.charAt(i);
                i++

                //Push to the stack
                if (line.charAt(i)=='>'){
                
                    stack.push(string);           
            }
        }
    }

    //End of line
   if(line.length-1==i&& stack[stack.length]==undefined){
       if(stack.length!=0){

        //There is a stack remaining because no closing tag found
        comment='Expected </'+stack[stack.length-1]+'> found #';

        //Empty the array for the next line
        stack= [];
        return comment;
       }

       //Every tags defined correctly
        comment='Correctly tagged paragraph'
        return comment;

    }

}
}
var test6 = '<B></B><C></C>This should be centred and in boldface, but there is a missing closing tag<C></C>'

console.log(tag(test6))
module.exports= tag;