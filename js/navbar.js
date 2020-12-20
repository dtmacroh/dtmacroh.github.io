  Vue.component('navbar', {
      props: ['navi'],
      template: `
      <!-- Navigation
        ==========================================-->
	<nav id="menu" class="navbar navbar-default navbar-fixed-top">
		<div class="container">
			<!-- Brand and toggle get grouped for better mobile display -->
			<div class="navbar-header">
				<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
					<span class="sr-only">Toggle navigation</span>
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
                </button>
                <a  href="index.html"> <img  class="navbar-brand" style="height:55px" src="img/logo.png"></a>
				<a class="navbar-brand" href="index.html"> DEBBIE MACROHON
			
          </a>
			</div>
      
			<!-- Collect the nav links, forms, and other content for toggling -->
			<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
				<ul class="nav navbar-nav navbar-right">
					<li>
						<a href="index.html" class="page-scroll">Home</a>
            </li>
            <li>
						<a href="index.html#works-section" class="page-scroll">Portfolio</a>
            </li>
            <li>
						<a href="index.html#about-section" class="page-scroll">About</a>
            </li>
					<li>
						<a href="puns.html" class="page-scroll">Puns</a>
            </li>
            <!-- <li class="dropdown" style="visible:false"><a href="index.html" class="dropdown-toggle" data-toggle="dropdown">Dropdown <b class="caret"></b></a>
		<ul class="dropdown-menu">
			<li><a href="project-0.html">Project 0</a></li>
			<li><a href="#">Project 1</a></li>
			<li><a href="#">Project 2</a></li>
      </ul>
      </li> -->
      </ul>
			</div>
			<!-- /.navbar-collapse -->
		</div>
		<!-- /.container-fluid -->
    </nav>
    `
    
})

var nav = new Vue({
    el:'#nav',
    data:{
        iter:[{id:1}]
    }
  })
  

  Vue.component('foot', {
	props: ['foot'],
	template: `
	<div id="footer">
	<div class="container">
	<div class="fnav">
	  <p>Copyright &copy; Debbie Macrohon. Designed by
		<a href="http://www.templatewire.com" rel="nofollow">TemplateWire</a>
	  </p>
	  <div>Icons made by
		<a href="http://www.freepik.com" title="Freepik">Freepik</a> and <a href="https://www.flaticon.com/authors/lucy-g" title="Lucy G">Lucy G</a> from
		<a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by
		<a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0"
		  target="_blank">CC 3.0 BY</a>
	  </div>
	 
	</div>
  </div>
  </div>`
  })

  
var nav = new Vue({
    el:'#foot',
    data:{
        iter:[{id:1}]
    }
  })
  