
    Vue.component('project', {
        props: ['props'],
        template: `
        
    <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4" v-bind:class="props.filter">
            <div class="portfolio-item project-item">
              <div class="hover-bg " style= "height:150px;width:100%"> <a v-bind:href="props.pageref" >
                <div class="hover-text">
                  <h4>{{ props.title }}</h4>
                  <small>{{ props.subtitle }}</small>
                  <div class="clearfix fill"></div>
                </div>
                <img :src="props.image" class="img-responsive fill" style="height:100%;" :alt="props.title" > </a> 
                  </div>
                <div style="display:block;font-size:90%;text-align:center">
            <p>{{ props.title }}</p>
          
            </div>
            <slot></slot>
            </div>
          </div>`
  
      })
  
      var projects = new Vue({
        el: '#proj',
        data: {
          projects: [{
              title: "The Irene",
              subtitle: "A Button Project",
              pageref: "project-0.html",
              image: "img/portfolio/hakase.png",
              filter: 'hci',
              exp: ['WPF', 'C#']
            },
            {
              title: "Girl Scout Sash",
              subtitle: "A Physical Interactive Sash",
              pageref: "project-1.html",
              image: "img/portfolio/project1.jpeg",
              filter: 'hci',
              exp: ['Arduino', 'RFID', 'Tangibles']
            },
            {
              title: "Rooting For You",
              subtitle: "An Immersive Tree-Planting Simulation",
              pageref: "project-2.html",
              image: "img/portfolio/project2.png",
              filter: 'hci',
              exp: ['Unity', 'VR']
            },
            {
              title: "Workplace Rhythm",
              subtitle: "An Attempt to Make a Hygge Workplace",
              pageref: "project-3.html",
              image: "img/portfolio/project3.png",
              filter: 'hci',
              exp: ['Kinect', 'Unity']
            },
            {
              title: "Crime in Alberta",
              subtitle: "Visualization of Crime in Calgary and inter-Alberta",
              pageref: "datavis.html",
              image: "img/datavis/calgaryMap.png",
              filter: 'datavis',
              exp: ['Python', 'Tableau']
            },
            {
              title: "BettyBot",
              subtitle: "An Elderly Care Robot",
              pageref: "bettybot.html",
              image: "img/portfolio/bettybotmain.png",
              filter: 'robotics',
              exp: ['Python', 'Powershell']
            },
            {
              title: "IronViz 2020",
              subtitle: "Visualization about Health and Wellness",
              pageref: "healthviz.html",
              image: "img/portfolio/IronViz.jpg",
              filter: 'datavis',
              exp: ['Python', 'Tableau']
            }
          ]
  
        }
      })
      var categories = new Vue({
        el: '#categories',
        data: {
          categories: [{
              text: 'All',
              filter: '*',
              isActive: true
            },
            {
              text: 'HCI',
              filter: '.hci'
            },
            {
              text: 'Data Visualization',
              filter: '.datavis'
            },
            {
              text: 'Robotics',
              filter: '.robotics'
            }
          ]
        }
      })