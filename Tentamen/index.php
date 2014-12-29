
<!DOCTYPE html>
<html>
<head>
    <title>Todo App</title>
    <link rel="stylesheet" href="style.css" type="text/css" media="screen" charset="utf-8">    
</head>
  <body>
    <div class="container" id="pussy">
      <h3>Todo</h3>
        
      <div id="newlist"> 
        <h2> New list </h2>
        
            <div id="tasks"><!-- I denna div dina nya tasks hamna -->
            </div>
          
        <p>
          <input id="new-task" type="text">
           <button id="addbutton" type="button">Add</button>
            <button id="newDeleteButton" type="button" >The other delete Button</button>
        </p>
         <!--This was a function to find the nodeName or the parent nodeName
<div id="q">
             <ul id="a">
              <li id="z">Coffee</li>
              <li>Tea</li>
              <li>Milk</li>
            </ul> 
            function check (){var f = document.getElementById("z").parentNode.parentNode.nodeName;console.log(f);} check();-->  
          
          </div>
    </div>
      
     
      </div>
    </div>
    <script src="app.js"></script>
  </body>
</html>
