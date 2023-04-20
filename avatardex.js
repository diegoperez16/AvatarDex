const characterCount = 200;

//List of Characters
const avatarCharacters = ["Aang", "Katara", "Toph", "Zuko", "Sokka", "Iroh", "Ozai", "Azula", "Ty Lee", 
"Suki", "Roku", "Kyoshi", "Appa", "Sozin","Korra", "Tenzin", "Asami Sato", "Zaheer", "Mako", "Bolin" ]

//Characters with Bending
const charactersBending = {"Aang" : "Avatar", "Katara" : "Waterbender", "Toph" : "Earthbender", "Zuko" : "Firebender", "Sokka" : "Non-bender", "Iroh" : "Firebender", 
"Ozai" : "Firebender", "Azula" : "Firebender", "Ty Lee" : "Non-bender", 
"Suki" : "Non-bender", "Roku" : "Avatar", "Kyoshi" : "Avatar", "Appa" : "Flying Beast", 
"Sozin" : "Firebender","Korra" : "Avatar", "Tenzin" : "Airbender", "Asami Sato" : "Firebender", "Zaheer" : "Airbender", "Mako" : "Firebender", "Bolin" : "Earthbender" }

const cDesc = {"Aang" : "A reluctant hero, Aang often acts in a fun-loving, carefree manner. His pacifist and vegetarian nature demonstrate his love for life, a primary trait of Buddhism. The creators intended Aang to defeat enemies with his wits and be a trickster hero. Though Aang generally acts in a playful, carefree manner, he becomes more serious during crisis and danger. Aang is rescued from a century of suspended animation by Katara and Sokka. The three of them go on a quest to teach Aang the three elements he does not know: Water, Earth, and Fire. Aang eventually learns Waterbending at the North Pole, Earthbending from Toph, and Firebending from Zuko. He also helps various groups of people throughout the Four Nations. Aang ultimately defeats the Fire Lord at the end of the series but does not take his life, further highlighting his opposition to violence.", 
"Katara" : "The last remaining water-bender from the Southern Water Tribe, due to an invasion by the Southern Raiders and kidnapping of all water-benders in the tribe years previously. By the age of fifteen, she had mastered the art of water-bending and thus began teaching Aang Waterbending simultaneously to his studies on earthbending. A protective sister for the group; Katara is still very stubborn and described as a generic anime heroine by SciFi.com. Katara is shown to be a very skilled Waterbender, one with the ability to cut through objects, to manipulate water whips, and the ability to bloodbend, which allows her to control the water in another's body.", 
"Toph" : "A blind Earthbending master of the prestigious Bei Fong family in Gaoling. Her parents are overprotective and view her blindness as a disability. To avoid them, Toph learned Earthbending from Badgermoles and became a famous fighter for a time. She later fled her home to completely escape her family's control on her and to help Aang master Earthbending. Toph is fiercely independent, sarcastic, direct, brutally frank, and confrontational, commonly depicted as the choleric and tomboy of the group. Unlike other Earthbenders, her blindness produced a distinct style of earthbending that is not based on Hung Gar as is conventional, but rather the Southern Praying Mantis. This style places emphasis on short power and low kicks and complements Toph's build. Toph invented Metalbending while escaping from a metallic box. The technique requires intensive concentration on the earth and manipulating the impurities within the metal", 
"Zuko" : "Prince Zuko was originally the primary antagonist of the series, but developed into an anti-hero and tragic hero and later, a protagonist. Zuko had been exiled prior to the beginning of the series by his father and believed that capturing the Avatar was the only way to regain his honor. Zuko's ancestry reflects his own conflicted nature; his paternal great-grandfather is Fire Lord Sozin, the one who started the war, while his maternal great-grandfather is Avatar Roku. During his exile, Zuko stumbles upon the newly released Aang but fails to capture him. Later on, when Admiral Zhao successfully captures Aang, Zuko releases him thus resulting in his new turncoat status. As a result, he and his mentor, Iroh, flee into the Earth Kingdom, where Zuko bonds with the people his nation terrorized. After being tempted by Azulas offer of honour-restoration, he betrays his uncle. After much internal struggle and turmoil, Zuko rejects the Fire Nation and seeks his uncle's forgiveness. He then joins the Avatar's group to become Aang's friend and Firebending teacher. During the series finale, Zuko is crowned Fire Lord and ends the war. Originally only a semi-competent Firebender, he becomes far more proficient as the series progresses, eventually reaching a master Firebenders level of skill.",
"Sokka" : "A 16-year-old warrior from the Southern Water Tribe and Katara's brother. After rescuing Aang from the iceberg and learning of him being the Avatar, he along with Katara accompanies Aang on his quest to master the four elements and defeat the Fire Lord, ending the war and bringing peace to the world. Although he hails from a tribe of people with the ability to bend water, he was not given the gift and instead strives to become a worthy warrior and leader. Instead of bending, he is frequently given opportunities to use his ingenuity and weapons, including his boomerang, machete, and a space sword he forged from a meteorite.",
"Iroh" : "Zuko and Azula's uncle, a Firebending master and a former Crown Prince of the Fire Nation, a race of people who can create and manipulate fire. He is a retired General of the Fire Nation, and older brother of Fire Lord Ozai.", 
"Ozai" : "The father of Zuko and Azula, younger brother of Iroh, and the main antagonist of the series. Although serving as the primary antagonist for the series, his face was not revealed until the third season. He is an extremely powerful firebender - one able to hold his own against an Avatar in the Avatar State. He was later stripped of his bending abilities by Aang, who deemed him not worthy of knowing firebending.", 
"Azula" : "Zuko's sister and the primary antagonist in the last two seasons of the series. She was introduced in 'The Avatar State' as a plot device to aid in Zuko's gradual transformation from antagonism to becoming a protagonist.", 
"Ty Lee" : "A cheerful and energetic young woman who, along with Mai, accompanies Azula on her quest to capture Zuko, Iroh, and the Avatar. Throughout the series, she has been shown to be a deadly enemy, due to her unique fighting style and her acrobatic skills, which focuses on Varma Kalai|striking pressure point's to disable her opponents, which can temporarily disable their ability to bend. After betraying Azula, she was temporarily imprisoned and released when the Fire Lord was defeated. She is shown to have bonded with the Kyoshi Warriors while in jail and has joined them. She seemed to have a crush on Sokka due to her many flirtings with him. Their relationship has changed to a friendship after she discovered that Suki was Sokka's girlfriend.", 
"Suki" : "The leader of the young female warriors of Kyoshi Island, The Kyoshi Warriors. She is an exceptionally skilled fighter and a staunch ally of the protagonists. She was also Sokka's love interest after the loss of Princess Yue. She was imprisoned by the Fire Nation after the failed invasion of the capital but was ultimately released by Sokka and Zuko, along with Hakoda and Chit-Sang. She remained with the protagonists thereafter and fought to disable the Fire Nation air force.", 
"Roku" : "The previous Avatar incarnation who existed before Aang. A friend of Fire Lord Sozin, Avatar Roku admitted that his passive silence encouraged Sozin to begin his colonization campaign - Sozin had left Roku to die on top of a volcano in order to move forward with his plans. Avatar Roku acts like Aang's mentor many times throughout the series, offering pieces of wisdom and in one case, helping Aang escape Fire Nation troops.", 
"Kyoshi" : "The Earth Kingdom-born Avatar immediately succeeding Avatar Kuruk of the Northern Water Tribe, and preceding Avatar Roku of the Fire Nation. She died at the age of 230, making her the oldest confirmed human, and was also an exceptionally tall woman, towering over most people.", 
"Appa" : "Aang's sky bison who serves as the group's main form of transportation around the world. He was stuck in suspended animation with Aang for 100 years and shares a very strong bond with him. He possesses the ability to fly and can use his tail to create powerful gusts of air. Aang said that the flying bison were the first Airbenders.", 
"Sozin" : "The ruler of the Fire Nation from 58 BG until his death in 20 AG, and the instigator of the Hundred Year War. Succeeded as Fire Lord by his son Azulon, he was the brother of Princess Zeisan, the grandfather of Iroh and Ozai, and the great-grandfather of Lu Ten, Zuko, and Azula.",
"Korra" : "The current Avatar and first Avatar of the Second Avatar Age.", 
"Tenzin" : "Korra's airbending teacher and first born son of Aang and Katara.", 
"Asami Sato" : "Korra's best friend and girlfriend who owns the company, Future Industries.", 
"Zaheer" : "The main antagonist in the third season of the series.", 
"Mako" : " A firebender from a multicultural family who grew up on the streets of Republic City.", 
"Bolin" : "Mako's younger brother who can earthbend." }


//Used to apply the photos from API
var dex = {};


window.onload = async function() {
    for(let i = 0; i < avatarCharacters.length; i++){
        
        let name = avatarCharacters[i];
        
        await getCharacter(avatarCharacters[i], i);
        let character = document.createElement("div");
        character.id = i;
        character.innerText = i+1 + ".  " + avatarCharacters[i].toUpperCase();
        character.classList.add("character-name");


        character.addEventListener("click", updateCharacter);

        document.getElementById("character-list").append(character);
        
        
        
    }
}

async function getCharacter(name, num) {
    let url = "https://last-airbender-api.fly.dev/api/v1/characters?name=" + name;

    let res = await fetch(url);
    let character = await res.json();
    
    let characterName = character[0].name;

    let characterImg = character[0].photoUrl;

    if(name == "Katara" || name =="Zuko" || name == "Roku" || name == "Sozin"){
        characterName = character[1].name;
        characterImg = character[1].photoUrl;
    }

    let characterBending = charactersBending[name];

    let cDescription = cDesc[name];

    console.log(characterBending);

    
    dex[num] = { "name" : characterName, "img": characterImg, "bending": characterBending, "description" : cDescription };

    
}

 function updateCharacter(){

    document.getElementById("character-img").src = dex[this.id]["img"];
    
    var elements = document.getElementsByClassName('character-name');

    
    let bendingsDiv = document.getElementById("character-bendings");
    
    let name = dex[this.id]["name"];

    while(bendingsDiv.firstChild) {
        bendingsDiv.firstChild.remove();
    }


    let bendings = dex[this.id]["bending"];
    
    let bend = document.createElement("span");

    bend.innerText = bendings.toUpperCase();
    bend.classList.add("bend-box");

    if(bendings == "Firebender"){
        bend.classList.add("fire");
    }
    else if(bendings == "Airbender"){
        bend.classList.add("air");
    }
    else if(bendings == "Waterbender"){
        bend.classList.add("water");
    }
    else if(bendings == "Earthbender"){
        bend.classList.add("earth");
    }
    else if(bendings == "Avatar"){
        bend.classList.add("avatar");
    }
    else{
        bend.classList.add("none")
    }


    bendingsDiv.append(bend);

    
    document.getElementById("character-description").innerText = dex[this.id]["description"];
    
   

        // Loop through each element and set the background color
        for(let i = 0; i < elements.length;i++){
            if(i == this.id){
                elements[this.id].style.backgroundColor = 'yellow';
            }
            else{
                elements[i].style.backgroundColor = 'white';
            }
            
        }
  

 }
