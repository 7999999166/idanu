function myFunction(){
    let data = $state(0);
  return {
          get info() { return data ; },
          set info(text) { data = text ; },
       }
     }

 export var counter = myFunction();

