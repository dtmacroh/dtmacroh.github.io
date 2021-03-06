Vue.component('sketch', {
			props: ['props'],
			template: `
  <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4">
          <div class="portfolio-item">
            <div class="hover-bg"> <a :href="props.image" rel="prettyPhoto">
              <div class="hover-text">
                <small>{{ props.desc }}</small>
                <div class="clearfix"></div>
              </div>
              <img :src="props.image" class="img-responsive" > </a> </div>
          </div>
        </div>`

		})