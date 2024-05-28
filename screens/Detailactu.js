import { View, Text, StyleSheet, Image, FlatList,Dimensions  } from 'react-native';
import React from 'react'
const windowWidth = Dimensions.get('window').width;

const DetailActu = ({route}) => {





    const data =[
        {
    
        id:1,
        img:require('../assets/actualite/img1.jpg'),
        date:'21 mars 2024',
        title:'KTM EXPRESSES THANKS TO TOBY PRICE AS PARTNERSHIP CONCLUDES',
        paragraph:'Red Bull KTM Factory Racing would like to thank two-time Dakar Rally Champion Toby Price for the many achievements and results he earned with the team over the past nine seasons, as his contract concludes.Price has competed on KTM machinery for 15 years, including nine as a factory rider, securing a world championship title and two Dakar victories for Red Bull KTM Factory Racing. Beginning his journey with the brand at home in Australia, Toby secured an incredible five Australian Off-Road Championship titles before making a name for himself on the world stage. At the 2014 FIM International Six Days Enduro (ISDE), the Australian represented his country and topped the E3 category before beginning his career in the rally discipline.In 2016, his second year as a factory rider, Toby triumphed at the Dakar Rally, winning five of the 14 stages to take the victory with a lead of nearly 40 minutes. Just three years later, Price brought home his second Dakar Rally win on his KTM 450 RALLY, despite suffering a broken wrist during the race. The 2024 edition of the event marked Toby’s 10th time competing at the Dakar.Complementing his Dakar successes, 2018 saw the Red Bull KTM Factory Racing ace crowned FIM Cross-Country Rallies World Champion, his first world title, after a successful season of stage wins, podiums, and victory at the Rallye du Maroc.KTM would like to thank Toby for the multitude of achievements he has shared with Red Bull KTM Factory Racing. The entire team wishes Toby all the best in his further career.Andreas Hölzl – Rally Team Manager: “First of all, we would like to say a huge thank you to Toby for all of his incredible achievements with Red Bull KTM Factory Racing. It’s safe to say I share the sentiment of the whole team in that we are sorry to see Toby go, but we would like to thank him for the key role he has played in the team for so many years. From his two Dakar wins to his world championship title, Toby has always given 110%. He is a team player through and through and has shown incredible passion and commitment to the brand over the years. We wish Toby all the very best for the future.”Pit Beirer – KTM Motorsports Director: "A massive thank you to Toby for everything he has contributed to our rally program, and for the passion he has constantly shown for the sport and the brand. Joining the KTM family over 15 years ago, he has brought home a collection of trophies and successes for the team, including his world championship title and two Dakar wins. Toby has been a hugely influential member of the rally team, and his significance to the brand and its many triumphs cannot be overstated. I’m certain I speak for all at KTM when I wish him well in his future endeavors.',
        
    
    },
    {
    
        id:2,
        img:require('../assets/actualite/img2.jpg'),
        date:'17 mars 2024',
        title:'CHASE SEXTON AND TOM VIALLE CLAIM TRIPLE CROWN PODIUMS IN INDIANAPOLIS',
        paragraph:"Red Bull KTM Factory Racing's Chase Sexton and Tom Vialle both earned podium results in tonight's 10th round of the 2024 AMA Supercross Championship at the Indianapolis Triple Crown, with Sexton racing to third overall in 450SX and Vialle finishing second in the 250SX East Main Event. Sexton continues to regain complete fitness following his recent hand injury, delivering a trio of consistent performances onboard his KTM 450 SX-F FACTORY EDITION in technical track conditions. The defending champion was third in the opening two races and then finished strongly with P2 in the final encounter, landing him third on the podium, and he retains third in the point standings. Chase Sexton: 'Indy was definitely an improvement again. Qualifying wasn't the hottest for me, but we showed up tonight and overall we're trying to build every weekend. I feel like we're getting better and I'm able to do motos during the week now, so kind of getting back to how I would normally train. We still have some room for improvement, for sure, but we're on the right path and we're going to try to keep inching closer over these coming rounds, give it my best every weekend.' 450SX teammate Aaron Plessinger was solid all night on his way to sixth overall riding his KTM 450 SX-F FACTORY EDITION, going 6-4-9 across the three races. His best ride came in the second moto after running up front early on, and that fourth position was decisive in his final result. Despite going down in the final outing on his way to ninth, Plessinger is positioned seventh in points with seven rounds remaining. Aaron Plessinger: 'Indianapolis was alright, I was happy with my riding, but the results didn't show. The first one, I got off to a mediocre start and rode around in 11th, but then I started clicking off laps and got up to sixth. Race 2, my start was really good and I went backward, then started riding good around halfway and came back to fourth. The third one was decent early on again, before I tried passing [Jason] Anderson in the whoops, we came together and I went down. I salvaged what I could from there. Overall, it was a decent night, and we'll go back to work to get better in the first few laps!' Another standout ride from two-time MX2 World Champion Vialle saw the Frenchman claim his fourth-consecutive podium in 250SX East wearing the red plates this weekend, piecing together 4-3-1 results and second place on the podium. A crash in the first race dented his chances overall, but he managed to rebound with the final race win of the night on his KTM 250 SX-F FACTORY EDITION. He is second in the series, just two points outside of the lead. Tom Vialle: 'I actually felt really good in the first moto and I had the crash in the whoops, so I was really frustrated. In the second one, I didn't ride the best, and then in the third race I feel like I rode the best that I was able to all day. I'm pretty happy – the track was tough tonight, that's for sure. I really wanted to win the last one, which I did in the end, and we're still in the fight, so that's what matters.",
    },
    {
    
        id:3,
        img:require('../assets/actualite/img3.jpg'),
        date:'10 mars 2024',
        title:'SOLID AND STEADY START FOR RED BULL KTM AT 2024 MXGP OPENER IN ARGENTINA',
        paragraph:'World Championship winners and MX2 class defending #1s, Red Bull KTM Factory Racing, launched the 2024 MXGP season with Andrea Adamo scoring a top five finish in the dark sandy volcanic soil of Neuquen for the Grand Prix of Argentina and the first round of twenty in the new campaign.MXGP fires into life with the traditional hike to Patagonia and the fast, rough and popular Neuquen circuit with a busy attendance watching the fastest international dirtbike racers embark on another GP seasonJeffrey Herlings takes 8th overall on his KTM 450 SX-F and his first MXGP appearance since the 2023 Grand Prix of Germany. The Dutchman races to a brace of top tens in the two motosMX2 World Champion Andrea Adamo makes a solid step in his world title defense with 5th on the KTM 250 SX-FSacha Coenen starts his second career world championship season and in Red Bull KTM colors and runs to 8th. Liam Everts is still in recovery from right thumb surgery and is hopeful of returning to action by round two in SpainThe wide and rippled course of Neuquen has become a familiar Grand Prix staple for the MXGP field and since the circuit first entered the world championship in 2015. Red Bull KTM Factory Racing made the long journey from central Europe to the depths of South America with three of their four riders in play and with 5-time title winner Jeffrey Herlings making a welcome return to the orange set-up.Under cloudy, chilly skies and with typically vocal and passionate native support, the GP got going with the RAM Qualification Heat on Saturday providing both MXGP and MX2 classes with their first gate drops of the season. Herlings rode to a steady 6th place while Adamo started excellently in MX2 and led until the last two laps. The Italian brought his KTM 250 SX-F home in 3rd for a decent gate choice pick for Sunday. Coenen rode to 9th.Andrea Adamo, opting to keep his career number of #80 in place of #1, strived to be hot away from the line for the first race on Sunday and in sunnier weather. The Italian fared better in the second moto where a 5th position represented the highest ranking for the team on the day. Andrea was 5th overall. Sacha Coenen, who finished 17th at Argentina in 2023, suffered from a few small mistakes but his runs to 6th and 10th was good enough for 8th.Jeffrey Herlings took a measured approach to the difficult, fast and bumpy Argentine soil. Playing a smart game and fully aware of the 57 starts still to come after the Nequen fixture Herlings plotted charts to 8th and 7th for 8th in the final rankings. Fellow Belgian Liam Everts missed the trip to Argentina due to an injury with his right thumb. The 2023 multiple Grand Prix winner is recovering from corrective surgery and is hopeful of re-joining the team for round two. The following fixture sees MXGP return to European shores and to the Intu Xanadú – Arroyomolinos in Madrid for the Spanish Grand Prix on March 23-24.',
    
    
    },
    ]

    const { id } = route.params;
    const articles = data.filter(item => item.id === id);
  
    const renderItem = ({ item }) => (
        <View style={styles.item}>
          <Image source={item.img} style={styles.img} />
          <View style={styles.textContainer}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.texte}>{item.paragraph}</Text>
          </View>
        </View>
      );
    
      return (
        <View style={styles.page}>
          <FlatList
            data={articles}
            renderItem={renderItem}
            keyExtractor={item => item.id.toString()}
            style={styles.flatList}
            horizontal={false}
          />
        </View>
      );
    };
    
    export default DetailActu;
    const styles = StyleSheet.create({
        title: {
            textAlign: 'center',
            fontSize: 20,
            color: 'white',
            fontWeight:'900',
            marginBottom:30
          },
        texte: {
          fontSize: 15,
          lineHeight: 24,
          color: 'white',
          width: windowWidth,
          textAlign: 'justify' // Pour justifier le texte
        },
        page: {
          backgroundColor: 'black',
          flex: 1
        },
        flatList: {
          flex: 1,
          padding: 20,
          marginBottom: 20,
        },
        img: {
          width: 350,
          height: 350,
          borderRadius: 200,
          marginBottom: 20,
        },
        item: {
          alignItems: 'center',
          marginBottom: 20,
        },
        textContainer: {
          width: '100%'
        }
      });