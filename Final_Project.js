// get the planets (each button that I have to click on)
var planet_name_array = document.getElementsByClassName('planet_name')
console.log(planet_name_array)

// get the planet img that will be shown
var the_shown_img =document.getElementById('planet_img')
console.log(the_shown_img)

// get the shown planet name
var the_shown_planetname = document.getElementById('name_in_middle')
console.log(the_shown_planetname)

// get the text of the body
var the_shown_body = document.getElementById('body_in_middle')
console.log(the_shown_body)

// get the wikipedia link of the planet
var the_shown_wiki_link = document.getElementById('thelink')
console.log(the_shown_wiki_link)

// get the option buttons (overview, internal........)
var options_array = document.getElementsByClassName('optionbtn')
console.log(options_array)

// get the value of the fixed facts of each planet
var the_shown_value = document.getElementsByClassName('info_value')
console.log(the_shown_value)

// array of the colors that are shown in active mode for the options
var active_color_array = ['#419EBB', '#EDA249', '#6F2ED6',
'#D14C32', '#D83A34', '#CD5120', '#1EC2A4', '#2D68F0']

options_array[0].style.backgroundColor = active_color_array[0]

var facts_value_array = ["rotation", "revolution", "radius", "temperature"]

// all the data 
var alldata =[

    {
      "name": "MERCURY",
      "options" : [{
        "content": "Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun's planets. Mercury is one of four terrestrial planets in the Solar System, and is a rocky body like Earth.",
        "source": "https://en.wikipedia.org/wiki/Mercury_(planet)"
      },{
        "content": "Mercury appears to have a solid silicate crust and mantle overlying a solid, iron sulfide outer core layer, a deeper liquid core layer, and a solid inner core. The planet's density is the second highest in the Solar System at 5.427 g/cm3 , only slightly less than Earth's density.",
        "source": "https://en.wikipedia.org/wiki/Mercury_(planet)#Internal_structure"
      },{
        "content": "Mercury's surface is similar in appearance to that of the Moon, showing extensive mare-like plains and heavy cratering, indicating that it has been geologically inactive for billions of years. It is more heterogeneous than either Mars's or the Moon’s.",
        "source": "https://en.wikipedia.org/wiki/Mercury_(planet)#Surface_geology"
      },],
      
      "facts" : [ "58.6 Days", "87.97 Days", "2,439.7 KM", "430°c"],
      "images": ["./planets-fact-site/starter-code/assets/planet-mercury.svg", "./planets-fact-site/starter-code/assets/planet-mercury-internal.svg", "./planets-fact-site/starter-code/assets/geology-mercury.png"]
      
    },
    {
      "name": "VENUS",

      "options" :[{
        "content": "Venus is the second planet from the Sun. It is named after the Roman goddess of love and beauty. As the brightest natural object in Earth's night sky after the Moon, Venus can cast shadows and can be, on rare occasions, visible to the naked eye in broad daylight.",
        "source": "https://en.wikipedia.org/wiki/Venus"
      }, {
        "content": "The similarity in size and density between Venus and Earth suggests they share a similar internal structure: a core, mantle, and crust. Like that of Earth, Venusian core is most likely at least partially liquid because the two planets have been cooling at about the same rate.",
        "source": "https://en.wikipedia.org/wiki/Venus#Internal_structure"
      }, {
        "content": "Much of the Venusian surface appears to have been shaped by volcanic activity. Venus has several times as many volcanoes as Earth, and it has 167 large volcanoes that are over 100 km (60 mi) across. The only volcanic complex of this size on Earth is the Big Island of Hawaii.",
        "source": "https://en.wikipedia.org/wiki/Venus#Surface_geology"
      }],
      

      "facts" : [ "243 Days", "224.7 Days", "6,051.8 KM", "471°c"],
      "images": ["./planets-fact-site/starter-code/assets/planet-venus.svg", "./planets-fact-site/starter-code/assets/planet-venus-internal.svg", "./planets-fact-site/starter-code/assets/geology-venus.png"]
      
    },
    {
      "name": "EARTH",

      "options":[{
        "content": "Third planet from the Sun and the only known planet to harbor life. About 29.2% of Earth's surface is land with remaining 70.8% is covered with water. Earth's distance from the Sun, physical properties and geological history have allowed life to evolve and thrive.",
        "source": "https://en.wikipedia.org/wiki/Earth"
      }, {
        "content": "Earth's interior, like that of the other terrestrial planets, is divided into layers by their chemical or physical (rheological) properties. The outer layer is a chemically distinct silicate solid crust, which is underlain by a highly viscous solid mantle.",
        "source": "https://en.wikipedia.org/wiki/Earth#Internal_structure"
      }, {
        "content": "The total surface area of Earth is about 510 million km2. The continental crust consists of lower density material such as the igneous rocks granite and andesite. Less common is basalt, a denser volcanic rock that is the primary constituent of the ocean floors.",
        "source": "https://en.wikipedia.org/wiki/Earth#Surface"
      },],

      "facts" : [ "0.99 Days", "365.26 Days", "6,371 KM", "16°c"],
      "images": ["./planets-fact-site/starter-code/assets/planet-earth.svg", "./planets-fact-site/starter-code/assets/planet-earth-internal.svg",  "./planets-fact-site/starter-code/assets/geology-earth.png"]
      
    },

    {
      "name": "MARS",

      "options":[{
        "content": "Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System, being larger than only Mercury. In English, Mars carries the name of the Roman god of war and is often referred to as the \"Red Planet\".",
        "source": "https://en.wikipedia.org/wiki/Mars"
      }, {
        "content": "Like Earth, Mars has differentiated into a dense metallic core overlaid by less dense materials. Scientists initially determined that the core is at least partially liquid. Current models of its interior imply a core consisting primarily of iron and nickel with about 16–17% sulfur.",
        "source": "https://en.wikipedia.org/wiki/Mars#Internal_structure"
      }, {
        "content": "Mars is a terrestrial planet whose surface consists of minerals containing silicon and oxygen, metals, and other elements that typically make up rock. The surface is primarily composed of tholeiitic basalt, although parts are more silica-rich than typical basalt.",
        "source": "https://en.wikipedia.org/wiki/Mars#Surface_geology"
      },],

      "facts" : [ "1.03 Days", "1.88 Years", "3,389.5 KM", "-28°c"],
      "images": ["./planets-fact-site/starter-code/assets/planet-mars.svg", "./planets-fact-site/starter-code/assets/planet-mars-internal.svg", "./planets-fact-site/starter-code/assets/geology-mars.png"]
      
    },
    {
      "name": "JUPITER",

      "options":[{
        "content": "Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass two and a half times that of all the other planets in the Solar System combined, but less than one-thousandth the mass of the Sun.",
        "source": "https://en.wikipedia.org/wiki/Jupiter"
      }, {
        "content": "When the Juno arrived in 2016, it found that Jupiter has a very diffuse core that mixes into its mantle. A possible cause is an impact from a planet of about ten Earth masses a few million years after Jupiter's formation, which would have disrupted an originally solid Jovian core.",
        "source": "https://en.wikipedia.org/wiki/Jupiter#Internal_structure"
      }, {
        "content": "The best known feature of Jupiter is the Great Red Spot, a persistent anticyclonic storm located 22° south of the equator. It is known to have existed since at least 1831, and possibly since 1665.",
        "source": "https://en.wikipedia.org/wiki/Jupiter#Great_Red_Spot_and_other_vortices"
      },],

      "facts" : [ "9.93 Hours", "11.86 Years", "69,911 KM", "-108°c"],
      "images": ["./planets-fact-site/starter-code/assets/planet-jupiter.svg", "./planets-fact-site/starter-code/assets/planet-jupiter-internal.svg", "./planets-fact-site/starter-code/assets/geology-jupiter.png"]
    
    },
    {
      "name": "SATURN",
      "options" :[ {
        "content": "Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter. It is a gas giant with an average radius of about nine and a half times that of Earth. It only has one-eighth the average density of Earth.",
        "source": "https://en.wikipedia.org/wiki/Saturn"
      }, {
        "content": "Despite consisting mostly of hydrogen and helium, most of Saturn's mass is not in the gas phase, because hydrogen becomes a non-ideal liquid when the density is above 0.01 g/cm3, which is reached at a radius containing 99.9% of Saturn's mass.",
        "source": "https://en.wikipedia.org/wiki/Saturn#Internal_structure"
      }, {
        "content": "The outer atmosphere of Saturn contains 96.3% molecular hydrogen and 3.25% helium by volume. The planet's most famous feature is its prominent ring system, which is composed mostly of ice particles with a smaller amount of rocky debris and dust.",
        "source": "https://en.wikipedia.org/wiki/Saturn#Atmosphere"
      },],

      "facts" : [ "10.8  Hours", "29.46 Years", "58,232 KM", "-138°c"],
      "images": ["./planets-fact-site/starter-code/assets/planet-saturn.svg", "./planets-fact-site/starter-code/assets/planet-saturn-internal.svg", "./planets-fact-site/starter-code/assets/geology-saturn.png"]
  
    },
    {
      "name": "URANUS",
      "options": [{
        "content": "Uranus is the seventh planet from the Sun. Its name is a reference to the Greek god of the sky, Uranus according to Greek mythology, was the great-grandfather of Ares. It has the third-largest planetary radius and fourth-largest planetary mass in the Solar System.",
        "source": "https://en.wikipedia.org/wiki/Uranus"
      }, {
        "content": "The standard model of Uranus's structure is that it consists of three layers: a rocky (silicate/iron–nickel) core in the centre, an icy mantle in the middle and an outer gaseous hydrogen/helium envelope. The core is relatively small, with a mass of only 0.55 Earth masses.",
        "source": "https://en.wikipedia.org/wiki/Uranus#Internal_structure"
      },  {
        "content": "The composition of Uranus's atmosphere is different from its bulk, consisting mainly of molecular hydrogen and helium. The helium molar fraction, i.e. the number of helium atoms per molecule of gas, is 0.15±0.03 in the upper troposphere.",
        "source": "https://en.wikipedia.org/wiki/Uranus#Atmosphere"
      },],

      "facts" : [ "17.2  Hours", "84 Years", "25,362 KM", "-195°c"],
      "images": ["./planets-fact-site/starter-code/assets/planet-uranus.svg", "./planets-fact-site/starter-code/assets/planet-uranus-internal.svg", "./planets-fact-site/starter-code/assets/geology-uranus.png"]

    },

    {
      "name": "NEPTUNE",
      "options":[{
        "content": "Neptune is the eighth and farthest-known Solar planet from the Sun. In the Solar System, it is the fourth-largest planet by diameter, the third-most-massive planet, and the densest giant planet. It is 17 times the mass of Earth, more massive than its near-twin Uranus.",
        "source": "https://en.wikipedia.org/wiki/Neptune"
      }, {
        "content": "Neptune's internal structure resembles that of Uranus. Its atmosphere forms about 5% to 10% of its mass and extends perhaps 10% to 20% of the way towards the core. Increasing concentrations of methane, ammonia and water are found in the lower regions.",
        "source": "https://en.wikipedia.org/wiki/Neptune#Internal_structure"
      }, {
        "content": "Neptune's atmosphere is 80% hydrogen and 19% helium. A trace amount of methane is also present. Prominent absorption bands of methane exist at wavelengths above 600 nm, in the red and infrared portion of the spectrum.",
        "source": "https://en.wikipedia.org/wiki/Neptune#Atmosphere"
      },],

      "facts" : [ "16.08  Hours", "164.79 Years", "24,622 KM", "-201°c"],
      "images": [ "./planets-fact-site/starter-code/assets/planet-neptune.svg", "./planets-fact-site/starter-code/assets/planet-neptune-internal.svg", "./planets-fact-site/starter-code/assets/geology-neptune.png"]

    }
]

var small_img = document.createElement('img')
small_img.className='img_small'
document.getElementById('image_div').appendChild(small_img)


for (let index = 0; index < planet_name_array.length; index++) {
    
    planet_name_array[index].onclick = function(){
        
    planet_name_array[0].style.color='#838391'
    planet_name_array[1].style.color='#838391'
    planet_name_array[2].style.color='#838391'
    planet_name_array[3].style.color='#838391'
    planet_name_array[4].style.color='#838391'
    planet_name_array[5].style.color='#838391'
    planet_name_array[6].style.color='#838391'
    planet_name_array[7].style.color='#838391'
    planet_name_array[0].style.borderTop = 'none'
    planet_name_array[1].style.borderTop = 'none'
    planet_name_array[2].style.borderTop = 'none'
    planet_name_array[3].style.borderTop = 'none'
    planet_name_array[4].style.borderTop = 'none'
    planet_name_array[5].style.borderTop = 'none'
    planet_name_array[6].style.borderTop = 'none'
    planet_name_array[7].style.borderTop = 'none'

    planet_name_array[index].style.color='white'
    planet_name_array[index].style.borderTop = 'solid 4px'
    planet_name_array[index].style.borderColor = active_color_array[index]
    the_shown_planetname.innerText = alldata[index].name


      for (let i = 0;i < the_shown_value.length;i++) {
        the_shown_value[i].innerText = alldata[index].facts[i]
        
      }


    // loop for the 3 options and the shown data
      for (let x = 0; x < options_array.length; x++) {
          options_array[0].style.backgroundColor = active_color_array[index]
          // options_array[0].style.backgroundColor = '#070724'
          options_array[1].style.backgroundColor = '#070724'
          options_array[2].style.backgroundColor = '#070724'
          the_shown_body.innerText = alldata[index].options[0].content
          the_shown_wiki_link.href = alldata[index].options[0].source
          the_shown_img.src = alldata[index].images[0]
          small_img.style.display='none'

          options_array[x].onclick = function(){
          // console.log('clicked')
          options_array[0].style.backgroundColor = '#070724'
          options_array[1].style.backgroundColor = '#070724'
          options_array[2].style.backgroundColor = '#070724'

          options_array[x].style.backgroundColor = active_color_array[index]
          the_shown_body.innerText = alldata[index].options[x].content
          the_shown_wiki_link.href = alldata[index].options[x].source
          the_shown_img.src = alldata[index].images[x]
          small_img.style.display='none'

          if(x==2){
            the_shown_img.src = alldata[index].images[0]
            small_img.src = alldata[index].images[2]
            small_img.style.display='flex'
          }

          else{
            the_shown_img.src = alldata[index].images[x]
          }
          
        }

      }

    }
}

var menue_div = document.createElement('div')
menue_div.className = 'mobile_menue'
document.getElementById('the_palnets_div').appendChild(menue_div)
// menue_div.style.display = 'none'
var line_menue1 = document.createElement('hr')
line_menue1.className = 'line'
menue_div.appendChild(line_menue1)
var line_menue2 = document.createElement('hr')
line_menue2.className = 'line'
menue_div.appendChild(line_menue2)
var line_menue3 = document.createElement('hr')
line_menue3.className = 'line'
menue_div.appendChild(line_menue3)

var mobile_btn1 = document.createElement('button')
mobile_btn1.className = 'mobile_btn'
document.getElementById('the_names_div').appendChild(mobile_btn1)
var mobile_btn2 = document.createElement('button')
mobile_btn2.className = 'mobile_btn'
document.getElementById('the_names_div').appendChild(mobile_btn2)
var mobile_btn3 = document.createElement('button')
mobile_btn3.className = 'mobile_btn'
document.getElementById('the_names_div').appendChild(mobile_btn3)
mobile_btn1.innerText = 'OVERVIEW'
mobile_btn2.innerText = 'STRUCTURE'
mobile_btn3.innerText = 'SURFACE'
var mobile_buttons = [mobile_btn1, mobile_btn2, mobile_btn3]
console.log(mobile_buttons)

var planets_menue_div = document.createElement('div')
planets_menue_div.className = 'planets_menue_div'
document.getElementById('mybody').appendChild(planets_menue_div)

var first_div_in_menue = document.createElement('div')
first_div_in_menue.className = 'first_div_in_menue'
planets_menue_div.appendChild(first_div_in_menue)

var planets_in_menue = document.createElement('h')
planets_in_menue.id = 'the_planets'
first_div_in_menue.appendChild(planets_in_menue)
planets_in_menue.innerText = 'THE PLANETS'

var menue_div_2 = document.createElement('div')
menue_div_2.className = 'mobile_menue'
first_div_in_menue.appendChild(menue_div_2)
var line_menue1_2 = document.createElement('hr')
line_menue1_2.className = 'line_2'
menue_div_2.appendChild(line_menue1_2)
var line_menue2_2 = document.createElement('hr')
line_menue2_2.className = 'line_2'
menue_div_2.appendChild(line_menue2_2)
var line_menue3_2 = document.createElement('hr')
line_menue3_2.className = 'line_2'
menue_div_2.appendChild(line_menue3_2)

// menue contents
var menue_contents = document.createElement('div')
menue_contents.id = 'menue_contents'
planets_menue_div.appendChild(menue_contents)

var each_planet_in_the_menue = []
var circle_div_in_menue = []
var planet_name_in_the_menue = []
var shape_in_the_menue = []

for (let a = 0 ; a <8;  a++) {
  each_planet_in_the_menue[a] =document.createElement('div')
  each_planet_in_the_menue[a].className='each_planet_in_the_menue'
  menue_contents.appendChild(each_planet_in_the_menue[a])

  circle_div_in_menue[a] =document.createElement('div')
  circle_div_in_menue[a].className='circle_div_in_menue'
  each_planet_in_the_menue[a].appendChild(circle_div_in_menue[a])
  circle_div_in_menue[a].style.backgroundColor = active_color_array[a]

  planet_name_in_the_menue[a] =document.createElement('h')
  planet_name_in_the_menue[a].className='planet_name_in_the_menue'
  each_planet_in_the_menue[a].appendChild(planet_name_in_the_menue[a])
  planet_name_in_the_menue[a].innerText = alldata[a].name

  shape_in_the_menue[a] =document.createElement('h')
  shape_in_the_menue[a].className='shape_in_the_menue'
  each_planet_in_the_menue[a].appendChild(shape_in_the_menue[a])
  shape_in_the_menue[a].innerText = '>'
}
each_planet_in_the_menue[7].style.border = 'none'
circle_div_in_menue[0].style.marginLeft = ' -18%'
planet_name_in_the_menue[0].style.marginLeft = '-35%'

// the mobile 

menue_div.onclick = function() {
  document.getElementById('maindiv').style.position = 'relative'
  planets_menue_div.style.display= 'flex'
  planets_menue_div.style.flexDirection = 'column'

  for (let n = 0; n < 8; n++) {

      each_planet_in_the_menue[n].onclick = function(){
      planets_menue_div.style.display= 'none'
      the_shown_planetname.innerText = alldata[n].name
  
        for (let i = 0;i < the_shown_value.length;i++) {
          the_shown_value[i].innerText = alldata[n].facts[i]
        }
  
  
      // loop for the 3 options and the shown data
        for (let x = 0; x < mobile_buttons.length; x++) {
          mobile_buttons[0].style.color='#838391'
          mobile_buttons[1].style.color='#838391'
          mobile_buttons[2].style.color='#838391'
          mobile_buttons[0].style.borderBottom = 'none'
          mobile_buttons[1].style.borderBottom = 'none'
          mobile_buttons[2].style.borderBottom = 'none'


            the_shown_body.innerText = alldata[n].options[0].content
            the_shown_wiki_link.href = alldata[n].options[0].source
            the_shown_img.src = alldata[n].images[0]
            small_img.style.display='none'
            
            mobile_buttons[x].onclick = function(){
            console.log('clicked')
            mobile_buttons[0].style.color='#838391'
            mobile_buttons[1].style.color='#838391'
            mobile_buttons[2].style.color='#838391'
            mobile_buttons[0].style.borderBottom = 'none'
            mobile_buttons[1].style.borderBottom = 'none'
            mobile_buttons[2].style.borderBottom = 'none'
            
            mobile_buttons[x].style.color='white'
            mobile_buttons[x].style.borderBottom = 'solid 4px'
            mobile_buttons[x].style.borderColor = active_color_array[n]
            the_shown_body.innerText = alldata[n].options[x].content
            the_shown_wiki_link.href = alldata[n].options[x].source
            the_shown_img.src = alldata[n].images[x]
            small_img.style.display='none'
  
            if(x==2){
              the_shown_img.src = alldata[n].images[0]
              small_img.src = alldata[n].images[2]
              small_img.style.display='flex'
            }
  
            else{
              the_shown_img.src = alldata[n].images[x]
            }
            
          } 
        }
  
      }
    
  }

}
