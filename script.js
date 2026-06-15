(() => {
  'use strict';

  const BUSINESS_WHATSAPP = '919949362143';
  const LANGUAGE_KEY = 'knrGoldLanguage';

  const telugu = {
  "Diamond, Gold, Platinum & Silver Jewellery | Visakhapatnam": "డైమండ్, గోల్డ్, ప్లాటినం & సిల్వర్ జ్యువెలరీ | విశాఖపట్నం",
  "Call: 0891-2795072": "కాల్: 0891-2795072",
  "WhatsApp: 9949362143": "వాట్సాప్: 9949362143",
  "Home": "హోమ్",
  "Services": "సేవలు",
  "About": "మా గురించి",
  "Gallery": "గ్యాలరీ",
  "Reviews": "రివ్యూలు",
  "FAQ": "ప్రశ్నలు",
  "Contact": "సంప్రదించండి",
  "Explore KNR Gold": "KNR Gold ను తెలుసుకోండి",
  "Jewellery & Gold Services": "జ్యువెలరీ & గోల్డ్ సేవలు",
  "Town Kotha Road, Visakhapatnam": "టౌన్ కొత్త రోడ్, విశాఖపట్నం",
  "Trusted Jewellery Destination in Visakhapatnam": "విశాఖపట్నంలో మీ నమ్మకమైన జ్యువెలరీ షాప్",
  "Diamond, Gold, Platinum & Silver Jewellery": "డైమండ్, గోల్డ్, ప్లాటినం & సిల్వర్ జ్యువెలరీ",
  "Discover elegant jewellery, genuine gemstones, custom designs and complete jewellery services at one trusted destination.": "అందమైన జ్యువెలరీ కలెక్షన్స్, అసలైన రత్నాలు, కస్టమ్ డిజైన్లు మరియు పూర్తి జ్యువెలరీ సేవలు — అన్నీ ఒకే నమ్మకమైన చోట.",
  "Since 2001": "2001 నుంచి",
  "Trusted Craftsmanship": "నైపుణ్యంతో కూడిన పనితనం",
  "Complete Jewellery Services": "పూర్తి జ్యువెలరీ సేవలు",
  "Explore Services": "సేవలు చూడండి",
  "Transparent Gold Services": "పారదర్శక బంగారం సేవలు",
  "SELL & RELEASE GOLD": "బంగారం అమ్మండి. తాకట్టు విడిపించండి.",
  "Old Gold Selling and Pledged Gold Assistance": "పాత బంగారం అమ్మకం & తాకట్టు బంగారం సహాయం",
  "Get clear guidance for selling old gold, gold exchange and release of pledged gold from banks or finance companies.": "పాత బంగారం అమ్మకం, గోల్డ్ ఎక్స్చేంజ్ మరియు బ్యాంకులు లేదా ఫైనాన్స్ సంస్థల్లో తాకట్టు పెట్టిన బంగారం విడిపించుకోవడానికి స్పష్టమైన మార్గదర్శనం పొందండి.",
  "Clear Discussion": "స్పష్టమైన వివరాలు",
  "Professional Guidance": "నిపుణుల మార్గదర్శనం",
  "Quick Response": "త్వరిత స్పందన",
  "Explore Gold Services": "గోల్డ్ సేవలు చూడండి",
  "Complete Jewellery Care": "పూర్తి జ్యువెలరీ కేర్",
  "DESIGN. REPAIR. RENEW.": "డిజైన్. రిపేర్. కొత్త రూపం.",
  "Custom Jewellery, Repair, Polish & Remodelling": "కస్టమ్ జ్యువెలరీ, రిపేర్, పాలిషింగ్ & రీమోడలింగ్",
  "Convert old gold into new ornaments, create custom designs, repair treasured jewellery and restore its shine.": "పాత బంగారంతో కొత్త ఆభరణాలు తయారు చేయించండి, కస్టమ్ డిజైన్లు సృష్టించండి, మీకు ఇష్టమైన ఆభరణాలను రిపేర్ చేసి వాటి మెరుపును తిరిగి పొందండి.",
  "Custom Designs": "కస్టమ్ డిజైన్లు",
  "Old to New": "పాతది నుంచి కొత్తది",
  "Repair & Polish": "రిపేర్ & పాలిషింగ్",
  "Explore Jewellery Services": "జ్యువెలరీ సేవలు చూడండి",
  "Quick Enquiry": "త్వరిత విచారణ",
  "Need quick assistance?": "త్వరగా సహాయం కావాలా?",
  "Share your requirement and contact KNR Gold instantly through WhatsApp.": "మీ అవసరాన్ని తెలియజేయండి. KNR Gold ను వెంటనే వాట్సాప్‌లో సంప్రదించండి.",
  "Select Service": "సేవను ఎంచుకోండి",
  "Sell Old Gold": "పాత బంగారం అమ్మండి",
  "Release Pledged Gold": "తాకట్టు బంగారం విడిపింపు",
  "Gold Exchange": "గోల్డ్ ఎక్స్చేంజ్",
  "Old Gold to New Ornaments": "పాత బంగారంతో కొత్త ఆభరణాలు",
  "Diamond Jewellery": "డైమండ్ జ్యువెలరీ",
  "Gold Jewellery": "గోల్డ్ జ్యువెలరీ",
  "Platinum Jewellery": "ప్లాటినం జ్యువెలరీ",
  "Silver Jewellery": "సిల్వర్ జ్యువెలరీ",
  "Real Gemstones": "అసలైన రత్నాలు",
  "Custom Jewellery Design": "ప్రత్యేక ఆభరణాల డిజైన్",
  "Lightweight Custom Jewellery": "తేలికైన కస్టమ్ ఆభరణాలు",
  "Jewellery Repair": "ఆభరణాల మరమ్మతు",
  "Jewellery Polishing & Cleaning": "ఆభరణాల పాలిషింగ్ & శుభ్రపరచడం",
  "Jewellery Remodelling": "ఆభరణాలకు కొత్త రూపం",
  "Ear Piercing": "చెవి కుట్టడం",
  "Today Gold / Silver Rate": "నేటి బంగారం / వెండి ధర",
  "General Enquiry": "సాధారణ సమాచారం",
  "Send Enquiry": "వివరాలు పంపండి",
  "Today Gold & Silver Rate": "నేటి బంగారం & వెండి ధర",
  "Call or WhatsApp KNR Gold for the latest rate.": "తాజా ధర కోసం KNR Gold కు కాల్ లేదా వాట్సాప్ చేయండి.",
  "Ask Rate": "ధర అడగండి",
  "Our Services": "మా సేవలు",
  "Complete Jewellery & Gold Services": "సంపూర్ణ ఆభరణాలు & బంగారం సేవలు",
  "Premium jewellery collections and complete support for gold selling, pledged gold, custom designs, repairs, remodelling and jewellery care.": "ప్రీమియం జ్యువెలరీ కలెక్షన్స్‌తో పాటు పాత బంగారం అమ్మకం, తాకట్టు బంగారం, కస్టమ్ డిజైన్లు, రిపేర్, రీమోడలింగ్ మరియు జ్యువెలరీ కేర్‌కు పూర్తి సహాయం.",
  "Jewellery Collections": "ఆభరణాల కలెక్షన్లు",
  "Explore jewellery and gemstones for daily wear, weddings, gifting and special occasions.": "రోజువారీ వినియోగం, పెళ్లిళ్లు, బహుమతులు మరియు ప్రత్యేక సందర్భాల కోసం జ్యువెలరీ మరియు రత్నాలను చూడండి.",
  "Elegant rings, earrings, necklaces and special-occasion diamond collections.": "అందమైన రింగులు, ఇయర్‌రింగ్స్, నెక్లెస్‌లు మరియు ప్రత్యేక సందర్భాల కోసం డైమండ్ కలెక్షన్స్.",
  "Enquire": "వివరాలు అడగండి",
  "Traditional and contemporary ornaments for weddings, festivals and everyday wear.": "పెళ్లిళ్లు, పండుగలు మరియు రోజువారీ వినియోగానికి సంప్రదాయ మరియు ఆధునిక ఆభరణాలు.",
  "Premium platinum rings, bands and modern jewellery designs.": "ప్రీమియం ప్లాటినం రింగులు, బ్యాండ్లు మరియు ఆధునిక జ్యువెలరీ డిజైన్లు.",
  "Silver ornaments, articles, gifts and jewellery for every occasion.": "ప్రతి సందర్భానికి సిల్వర్ ఆభరణాలు, వస్తువులు, బహుమతులు మరియు జ్యువెలరీ.",
  "Genuine gemstones available for jewellery and customised requirements.": "జ్యువెలరీ మరియు కస్టమ్ అవసరాల కోసం అసలైన రత్నాలు అందుబాటులో ఉన్నాయి.",
  "Gold Services": "బంగారం సేవలు",
  "Transparent assistance for old gold, exchange, pledged gold and conversion into new ornaments.": "పాత బంగారం అమ్మకం, ఎక్స్చేంజ్, తాకట్టు బంగారం మరియు కొత్త ఆభరణాలుగా మార్పుకు పారదర్శక సహాయం.",
  "Most Requested": "ఎక్కువగా అడిగే సేవ",
  "Sell old, unused or broken gold with clear discussion and professional guidance.": "పాత, ఉపయోగించని లేదా విరిగిన బంగారాన్ని స్పష్టమైన వివరాలు మరియు ప్రొఫెషనల్ మార్గదర్శనంతో అమ్మండి.",
  "Popular": "ప్రాచుర్యం",
  "Assistance for pledged gold release from banks or finance companies.": "బ్యాంకులు లేదా ఫైనాన్స్ సంస్థల్లో తాకట్టు పెట్టిన బంగారం విడిపించుకోవడానికి సహాయం.",
  "Exchange gold based on purity, weight, current market conditions and shop policy.": "ప్యూరిటీ, బరువు, ప్రస్తుత మార్కెట్ పరిస్థితులు మరియు షాప్ నిబంధనల ఆధారంగా గోల్డ్ ఎక్స్చేంజ్.",
  "Transform old gold into beautiful new ornaments according to your preferred design.": "మీకు నచ్చిన డిజైన్‌లో పాత బంగారాన్ని అందమైన కొత్త ఆభరణాలుగా మార్చించుకోండి.",
  "Jewellery Care & Custom Services": "ఆభరణాల సంరక్షణ & కస్టమ్ సేవలు",
  "Complete support to design, restore, repair and maintain your treasured jewellery.": "మీకు ఇష్టమైన ఆభరణాలను డిజైన్ చేయడానికి, కొత్త రూపం ఇవ్వడానికి, రిపేర్ చేయడానికి మరియు సంరక్షించడానికి పూర్తి సహాయం.",
  "Create personalised jewellery for weddings, gifts and special occasions.": "పెళ్లిళ్లు, బహుమతులు మరియు ప్రత్యేక సందర్భాల కోసం మీ అభిరుచికి తగ్గ జ్యువెలరీ తయారు చేయించుకోండి.",
  "Transform old or outdated jewellery into a fresh and modern design.": "పాత లేదా పాత తరహా ఆభరణాలకు కొత్త మరియు ఆధునిక రూపం ఇవ్వండి.",
  "Repair broken chains, damaged clasps, rings, bangles and loose stones.": "విరిగిన చైన్లు, దెబ్బతిన్న క్లాస్పులు, రింగులు, బ్యాంగిల్స్ మరియు వదులైన రాళ్లకు రిపేర్ సేవలు.",
  "Polish & Cleaning": "పాలిషింగ్ & క్లీనింగ్",
  "Restore the shine and beauty of favourite jewellery with professional care.": "ప్రొఫెషనల్ కేర్‌తో మీకు ఇష్టమైన ఆభరణాల మెరుపు మరియు అందాన్ని తిరిగి పొందండి.",
  "Professional ear-piercing service available at the shop. Confirm details before visiting.": "షాప్‌లో ప్రొఫెషనల్ చెవి కుట్టే సేవ అందుబాటులో ఉంది. రావడానికి ముందు వివరాలు నిర్ధారించుకోండి.",
  "About KNR Gold": "KNR Gold గురించి",
  "One Destination for All Your Jewellery Needs": "మీ అన్ని జ్యువెలరీ అవసరాలకు ఒకే చోటు",
  "KNR Gold is a jewellery and gold-service destination at Town Kotha Road, Visakhapatnam, serving customers since 2001.": "KNR Gold విశాఖపట్నం టౌన్ కొత్త రోడ్‌లో ఉన్న జ్యువెలరీ మరియు గోల్డ్ సేవల కేంద్రం. 2001 నుంచి కస్టమర్లకు సేవలు అందిస్తోంది.",
  "From diamond, gold, platinum and silver jewellery to gold selling, pledged-gold assistance, custom designs, repair, polishing and remodelling, the shop provides complete service under one roof.": "డైమండ్, గోల్డ్, ప్లాటినం, సిల్వర్ జ్యువెలరీ నుంచి పాత బంగారం అమ్మకం, తాకట్టు బంగారం సహాయం, కస్టమ్ డిజైన్లు, రిపేర్, పాలిషింగ్ మరియు రీమోడలింగ్ వరకు అన్ని సేవలు ఒకే చోట అందుబాటులో ఉన్నాయి.",
  "Trusted Local Service": "నమ్మకమైన స్థానిక సేవ",
  "Wholesale & Retail": "హోల్‌సేల్ & రిటైల్",
  "Complete Support": "పూర్తి సహాయం",
  "Gold & Jewellery": "గోల్డ్ & జ్యువెలరీ",
  "Why Choose Us": "మమ్మల్ని ఎందుకు ఎంచుకోవాలి?",
  "Craftsmanship, Transparency & Trust": "నైపుణ్యం, పారదర్శకత & నమ్మకం",
  "Long-standing local presence and customer relationships.": "దీర్ఘకాలిక స్థానిక సేవ మరియు కస్టమర్లతో నమ్మకమైన అనుబంధం.",
  "Complete Solutions": "పూర్తి పరిష్కారాలు",
  "Jewellery collections, gold services and after-sales care in one place.": "జ్యువెలరీ కలెక్షన్స్, గోల్డ్ సేవలు మరియు అమ్మకం తర్వాత కేర్ — అన్నీ ఒకే చోట.",
  "Transparent Guidance": "పారదర్శక మార్గదర్శనం",
  "Clear discussion of purity, weight, value, design and applicable charges.": "ప్యూరిటీ, బరువు, విలువ, డిజైన్ మరియు వర్తించే ఛార్జీల గురించి స్పష్టమైన వివరాలు.",
  "Quality Craftsmanship": "నాణ్యమైన పనితనం",
  "Careful attention to custom designs, repairs and remodelling.": "కస్టమ్ డిజైన్లు, రిపేర్లు మరియు రీమోడలింగ్‌పై ప్రత్యేక శ్రద్ధ.",
  "Personalised Service": "వ్యక్తిగత సేవ",
  "Solutions based on your style, occasion and jewellery requirement.": "మీ స్టైల్, సందర్భం మరియు జ్యువెలరీ అవసరానికి తగ్గ పరిష్కారాలు.",
  "Easy assistance through WhatsApp, phone and direct shop visit.": "వాట్సాప్, ఫోన్ లేదా నేరుగా షాప్‌ను సందర్శించడం ద్వారా సులభమైన సహాయం.",
  "Jewellery Categories": "జ్యువెలరీ విభాగాలు",
  "Real shop and jewellery photos can be added here before the final launch.": "ఫైనల్ లాంచ్‌కు ముందు ఇక్కడ నిజమైన షాప్ మరియు జ్యువెలరీ ఫోటోలు జోడించవచ్చు.",
  "Rings, earrings and special-occasion collections.": "రింగులు, ఇయర్‌రింగ్స్ మరియు ప్రత్యేక సందర్భాల కలెక్షన్స్.",
  "Traditional and contemporary ornaments.": "సంప్రదాయ మరియు ఆధునిక ఆభరణాలు.",
  "Platinum Collection": "ప్లాటినం కలెక్షన్",
  "Modern rings, bands and premium designs.": "ఆధునిక రింగులు, బ్యాండ్లు మరియు ప్రీమియం డిజైన్లు.",
  "Silver Collection": "సిల్వర్ కలెక్షన్",
  "Jewellery, articles, gifts and occasion items.": "జ్యువెలరీ, వస్తువులు, బహుమతులు మరియు ప్రత్యేక సందర్భాల ఐటమ్స్.",
  "Personalised jewellery created for your style.": "మీ స్టైల్‌కు తగ్గ వ్యక్తిగత జ్యువెలరీ.",
  "Remodelling": "రీమోడలింగ్",
  "Before-and-after transformation examples.": "మార్పుకు ముందు మరియు తర్వాత నమూనాలు.",
  "Customer Testimonials": "కస్టమర్ అభిప్రాయాలు",
  "What Customers Say": "కస్టమర్లు ఏమంటున్నారు",
  "Sample text only — replace with genuine customer-approved reviews before launch.": "ఇవి నమూనా రివ్యూలు మాత్రమే — లాంచ్‌కు ముందు నిజమైన కస్టమర్ అనుమతితో ఉన్న రివ్యూలను జోడించండి.",
  "“Very good service and the complete process was explained clearly. The staff were polite and helpful.”": "“చాలా మంచి సేవ. మొత్తం ప్రక్రియను స్పష్టంగా వివరించారు. సిబ్బంది మర్యాదగా మరియు సహాయకరంగా ఉన్నారు.”",
  "Sample Customer": "నమూనా కస్టమర్",
  "Visakhapatnam": "విశాఖపట్నం",
  "“I converted my old ornaments into a new design. The final jewellery was completed neatly and looked beautiful.”": "“నా పాత ఆభరణాలను కొత్త డిజైన్‌గా మార్చించాను. ఫైనల్ జ్యువెలరీ చాలా చక్కగా మరియు అందంగా వచ్చింది.”",
  "“I received proper guidance for my pledged-gold requirement. The response was quick and professional.”": "“నా తాకట్టు బంగారం అవసరానికి సరైన మార్గదర్శనం లభించింది. స్పందన త్వరగా మరియు ప్రొఫెషనల్‌గా ఉంది.”",
  "“Good collection of gold and silver jewellery. The customisation support was very useful.”": "“గోల్డ్ మరియు సిల్వర్ జ్యువెలరీ మంచి కలెక్షన్ ఉంది. కస్టమైజేషన్ సహాయం చాలా ఉపయోగకరంగా ఉంది.”",
  "Frequently Asked Questions": "తరచుగా అడిగే ప్రశ్నలు",
  "Final answers should be confirmed by the shop owner before the website goes live.": "వెబ్‌సైట్ లైవ్‌కు ముందు తుది సమాధానాలను షాప్ యజమాని నిర్ధారించాలి.",
  "What documents are required to sell old gold?": "పాత బంగారం అమ్మడానికి ఏ పత్రాలు అవసరం?",
  "Please contact KNR Gold before visiting. Valid identity and address proof may be required, and an original purchase bill can help if available.": "షాప్‌కు రావడానికి ముందు KNR Gold ను సంప్రదించండి. చెల్లుబాటు అయ్యే గుర్తింపు మరియు చిరునామా రుజువు అవసరం కావచ్చు. ఒరిజినల్ కొనుగోలు బిల్లు ఉంటే ఉపయోగపడుతుంది.",
  "How is the value of old gold calculated?": "పాత బంగారం విలువను ఎలా లెక్కిస్తారు?",
  "The final value generally depends on purity, net weight, current market rate and applicable shop terms. The assessment will be explained before confirmation.": "తుది విలువ సాధారణంగా ప్యూరిటీ, నికర బరువు, ప్రస్తుత మార్కెట్ ధర మరియు వర్తించే షాప్ నిబంధనలపై ఆధారపడి ఉంటుంది. నిర్ధారణకు ముందు అంచనాను వివరంగా చెబుతారు.",
  "What is required for pledged-gold release assistance?": "తాకట్టు బంగారం విడిపింపు సహాయానికి ఏమి అవసరం?",
  "Customers may need valid ID proof, pledge receipt or loan details. Confirm the exact process with KNR Gold before visiting.": "చెల్లుబాటు అయ్యే ఐడీ ప్రూఫ్, తాకట్టు రసీదు లేదా లోన్ వివరాలు అవసరం కావచ్చు. రావడానికి ముందు ఖచ్చితమైన ప్రక్రియను KNR Gold తో నిర్ధారించుకోండి.",
  "Can old gold be converted into new ornaments?": "పాత బంగారాన్ని కొత్త ఆభరణాలుగా మార్చుకోవచ్చా?",
  "Yes. You can discuss a new design, gold requirement, gemstone requirement, making charges and other applicable costs before proceeding.": "అవును. ముందుకు వెళ్లే ముందు కొత్త డిజైన్, అవసరమైన బంగారం, రత్నాలు, మేకింగ్ ఛార్జీలు మరియు ఇతర ఖర్చుల గురించి చర్చించవచ్చు.",
  "Do you provide jewellery repair and polishing?": "జ్యువెలరీ రిపేర్ మరియు పాలిషింగ్ సేవలు ఉన్నాయా?",
  "Yes. KNR Gold provides jewellery repair, cleaning and polishing services. Time and charges depend on the jewellery condition and work required.": "అవును. KNR Gold జ్యువెలరీ రిపేర్, క్లీనింగ్ మరియు పాలిషింగ్ సేవలు అందిస్తుంది. సమయం మరియు ఛార్జీలు ఆభరణం పరిస్థితి మరియు అవసరమైన పనిపై ఆధారపడి ఉంటాయి.",
  "Can I order a custom jewellery design?": "కస్టమ్ జ్యువెలరీ డిజైన్ ఆర్డర్ చేయవచ్చా?",
  "Yes. Share your idea, reference image or preferred style. The design, material, stones, estimate and expected delivery can be discussed at the shop.": "అవును. మీ ఆలోచన, రిఫరెన్స్ ఫోటో లేదా ఇష్టమైన స్టైల్‌ను పంచుకోండి. డిజైన్, మెటీరియల్, రాళ్లు, అంచనా ధర మరియు డెలివరీ సమయాన్ని షాప్‌లో చర్చించవచ్చు.",
  "Are real gemstones available?": "అసలైన రత్నాలు అందుబాటులో ఉన్నాయా?",
  "Real gemstones are available. Ask the shop for current availability, stone details and any supporting certification before purchase.": "అసలైన రత్నాలు అందుబాటులో ఉన్నాయి. కొనుగోలు ముందు ప్రస్తుత స్టాక్, రత్న వివరాలు మరియు అందుబాటులో ఉన్న సర్టిఫికేషన్ గురించి అడగండి.",
  "Is ear piercing available?": "చెవి కుట్టే సేవ అందుబాటులో ఉందా?",
  "Yes. Please contact the shop first to confirm availability, method, timing and any age-related requirements.": "అవును. అందుబాటు, విధానం, సమయం మరియు వయస్సుకు సంబంధించిన అవసరాలను తెలుసుకోవడానికి ముందుగా షాప్‌ను సంప్రదించండి.",
  "Contact Us": "మమ్మల్ని సంప్రదించండి",
  "Visit KNR Gold": "KNR Gold ను సందర్శించండి",
  "Visit the shop at Town Kotha Road, Visakhapatnam, or contact us for enquiries.": "విశాఖపట్నం టౌన్ కొత్త రోడ్‌లోని షాప్‌ను సందర్శించండి లేదా వివరాల కోసం మమ్మల్ని సంప్రదించండి.",
  "Quick Response Available": "త్వరిత స్పందన అందుబాటులో ఉంది",
  "Shop Address": "షాప్ చిరునామా",
  "Phone": "ఫోన్",
  "WhatsApp": "వాట్సాప్",
  "Email": "ఈమెయిల్",
  "Business Hours": "షాప్ సమయాలు",
  "Contact the shop to confirm today’s opening hours.": "నేటి షాప్ సమయాలను తెలుసుకోవడానికి ముందుగా సంప్రదించండి.",
  "Today": "ఈ రోజు",
  "Ask Gold & Silver Rate": "బంగారం & వెండి ధర అడగండి",
  "Town Kotha Road": "టౌన్ కొత్త రోడ్",
  "Visakhapatnam - 530001": "విశాఖపట్నం - 530001",
  "Get Directions": "దారి తెలుసుకోండి",
  "One destination for jewellery collections, complete jewellery care and trusted gold services in Visakhapatnam.": "విశాఖపట్నంలో జ్యువెలరీ కలెక్షన్స్, పూర్తి జ్యువెలరీ కేర్ మరియు నమ్మకమైన గోల్డ్ సేవలకు ఒకే చోటు.",
  "Quick Links": "త్వరిత లింకులు",
  "Custom Jewellery": "కస్టమ్ జ్యువెలరీ",
  "Repair & Remodelling": "రిపేర్ & రీమోడలింగ్",
  "Final valuation, documentation, rates, service process and payment terms are subject to shop policy and applicable rules.": "తుది విలువ, పత్రాలు, ధరలు, సేవా ప్రక్రియ మరియు చెల్లింపు నిబంధనలు షాప్ పాలసీ మరియు వర్తించే నియమాలకు లోబడి ఉంటాయి.",
  "© 2026 KNR Gold. All Rights Reserved.": "© 2026 KNR Gold. అన్ని హక్కులు రిజర్వ్ చేయబడ్డాయి.",
  "Today Market Rate": "నేటి మార్కెట్ ధర",
  "Gold & Silver Rate": "బంగారం & వెండి ధర",
  "Contact KNR Gold for the latest market rate. Final rate may vary according to purity, weight, market conditions and shop policy.": "తాజా మార్కెట్ ధర కోసం KNR Gold ను సంప్రదించండి. ప్యూరిటీ, బరువు, మార్కెట్ పరిస్థితులు మరియు షాప్ పాలసీ ఆధారంగా తుది ధర మారవచ్చు.",
  "Call Now": "ఇప్పుడే కాల్ చేయండి",
  "WhatsApp Rate": "వాట్సాప్‌లో ధర అడగండి",
  "Sell Gold": "బంగారం అమ్మండి",
  "Release": "తాకట్టు సహాయం",
  "Custom & Lightweight Jewellery": "తేలికైన కస్టమ్ ఆభరణాలు",
  "DESIGN YOUR DREAM JEWELLERY": "మీ కలల ఆభరణాన్ని రూపొందించుకోండి",
  "Lightweight Gold Jewellery, Personalised Your Way": "మీ అభిరుచికి తగ్గ తేలికైన బంగారు ఆభరణాలు",
  "Create lightweight and comfortable gold jewellery for daily wear, weddings, names, gifts and special occasions in modern or traditional styles.": "రోజువారీ వినియోగం, పెళ్లిళ్లు, పేరుతో కూడిన డిజైన్లు, బహుమతులు మరియు ప్రత్యేక సందర్భాల కోసం తేలికగా, సౌకర్యంగా ఉండే బంగారు ఆభరణాలను ఆధునిక లేదా సంప్రదాయ శైలిలో తయారు చేయించుకోండి.",
  "Personalised Designs": "మీ అభిరుచికి తగ్గ డిజైన్లు",
  "Lightweight & Comfortable": "తేలికగా & సౌకర్యంగా",
  "Modern & Traditional": "ఆధునిక & సంప్రదాయ శైలులు",
  "Start Custom Design": "మీ డిజైన్ ప్రారంభించండి",
  "Lightweight Custom Jewellery": "తేలికైన కస్టమ్ ఆభరణాలు",
  "Featured Custom Service": "ప్రత్యేక కస్టమ్ సేవ",
  "Create Your Dream Jewellery": "మీ కలల ఆభరణాన్ని రూపొందించుకోండి",
  "Choose a lightweight design and customise it to match your style. Create jewellery for everyday wear, weddings, names, gifts and special occasions with expert craftsmanship.": "మీ శైలికి తగ్గ తేలికైన డిజైన్‌ను ఎంచుకుని, మీకు నచ్చిన విధంగా మార్చించుకోండి. రోజువారీ వినియోగం, పెళ్లిళ్లు, పేరుతో కూడిన డిజైన్లు, బహుమతులు మరియు ప్రత్యేక సందర్భాల కోసం నిపుణుల పనితనంతో ఆభరణాలు తయారు చేయించుకోండి.",
  "Lightweight & Comfortable Wear": "తేలికగా & సౌకర్యంగా ధరించేందుకు",
  "22K (916) Gold Jewellery": "22 క్యారెట్ (916) బంగారు ఆభరణాలు",
  "Modern & Traditional Styles": "ఆధునిక & సంప్రదాయ శైలులు",
  "Custom Name Jewellery": "పేరుతో ప్రత్యేక ఆభరణాలు",
  "Special Occasion Jewellery": "ప్రత్యేక సందర్భాల ఆభరణాలు",
  "Expert Craftsmanship": "నిపుణుల పనితనం",
  "Designed Especially for You": "మీ కోసం ప్రత్యేకంగా రూపొందించబడుతుంది",
  "Share your idea or a reference image. The design, approximate weight, stones, making charges and delivery time will be confirmed before placing the order.": "మీ ఆలోచన లేదా రిఫరెన్స్ చిత్రాన్ని పంచుకోండి. ఆర్డర్‌కు ముందు డిజైన్, అంచనా బరువు, రాళ్లు, తయారీ ఛార్జీలు మరియు డెలివరీ సమయం స్పష్టంగా నిర్ధారించబడతాయి.",
  "Lightweight & Custom Jewellery": "తేలికైన & కస్టమ్ ఆభరణాలు",
  "Personalised designs for daily wear, names, weddings, gifts and special occasions.": "రోజువారీ వినియోగం, పేరుతో కూడిన డిజైన్లు, పెళ్లిళ్లు, బహుమతులు మరియు ప్రత్యేక సందర్భాల కోసం మీ అభిరుచికి తగ్గ ఆభరణాలు.",
  "Can I order lightweight customised jewellery?": "తేలికైన కస్టమ్ ఆభరణాలను ఆర్డర్ చేయవచ్చా?",
  "Yes. Lightweight designs can be discussed for daily wear, names, weddings, gifts and special occasions. The final weight, purity, stones, making charges and delivery time will be confirmed before placing the order.": "అవును. రోజువారీ వినియోగం, పేరుతో కూడిన డిజైన్లు, పెళ్లిళ్లు, బహుమతులు మరియు ప్రత్యేక సందర్భాల కోసం తేలికైన డిజైన్లను చర్చించవచ్చు. ఆర్డర్‌కు ముందు తుది బరువు, స్వచ్ఛత, రాళ్లు, తయారీ ఛార్జీలు మరియు డెలివరీ సమయం నిర్ధారించబడతాయి.",
  "Call": "కాల్"
};
  const placeholders = {
  "Your Name": "మీ పేరు",
  "Phone Number": "ఫోన్ నంబర్"
};
  const serviceTelugu = {
  "Sell Old Gold": "పాత బంగారం అమ్మడం",
  "Release Pledged Gold": "తాకట్టు బంగారం విడిపించుకోవడం",
  "Gold Exchange": "గోల్డ్ ఎక్స్చేంజ్",
  "Old Gold to New Ornaments": "పాత బంగారంతో కొత్త ఆభరణాలు తయారు చేయించడం",
  "Diamond Jewellery": "డైమండ్ జ్యువెలరీ",
  "Gold Jewellery": "గోల్డ్ జ్యువెలరీ",
  "Platinum Jewellery": "ప్లాటినం జ్యువెలరీ",
  "Silver Jewellery": "సిల్వర్ జ్యువెలరీ",
  "Real Gemstones": "అసలైన రత్నాలు",
  "Custom Jewellery Design": "ప్రత్యేక ఆభరణాల డిజైన్",
  "Jewellery Repair": "ఆభరణాల మరమ్మతు",
  "Jewellery Polishing & Cleaning": "ఆభరణాల పాలిషింగ్ & శుభ్రపరచడం",
  "Jewellery Remodelling": "ఆభరణాలకు కొత్త రూపం",
  "Ear Piercing": "చెవి కుట్టడం",
  "Today Gold / Silver Rate": "నేటి బంగారం / వెండి ధర",
  "General Enquiry": "సాధారణ సమాచారం"
};
  const whatsappTelugu = {
  "Hello KNR Gold, I want to enquire about diamond jewellery.": "నమస్కారం KNR Gold, డైమండ్ జ్యువెలరీ గురించి వివరాలు కావాలి.",
  "Hello KNR Gold, I want to enquire about gold jewellery.": "నమస్కారం KNR Gold, గోల్డ్ జ్యువెలరీ గురించి వివరాలు కావాలి.",
  "Hello KNR Gold, I want to enquire about platinum jewellery.": "నమస్కారం KNR Gold, ప్లాటినం జ్యువెలరీ గురించి వివరాలు కావాలి.",
  "Hello KNR Gold, I want to enquire about silver jewellery.": "నమస్కారం KNR Gold, సిల్వర్ జ్యువెలరీ గురించి వివరాలు కావాలి.",
  "Hello KNR Gold, I want to enquire about real gemstones.": "నమస్కారం KNR Gold, అసలైన రత్నాల గురించి వివరాలు కావాలి.",
  "Hello KNR Gold, I want to enquire about selling old gold.": "నమస్కారం KNR Gold, పాత బంగారం అమ్మడం గురించి వివరాలు కావాలి.",
  "Hello KNR Gold, I need assistance to release pledged gold.": "నమస్కారం KNR Gold, తాకట్టు బంగారం విడిపించుకోవడానికి సహాయం కావాలి.",
  "Hello KNR Gold, I want to enquire about gold exchange.": "నమస్కారం KNR Gold, గోల్డ్ ఎక్స్చేంజ్ గురించి వివరాలు కావాలి.",
  "Hello KNR Gold, I want to convert old gold into new ornaments.": "నమస్కారం KNR Gold, పాత బంగారంతో కొత్త ఆభరణాలు తయారు చేయించుకోవాలి.",
  "Hello KNR Gold, I am interested in a custom jewellery design.": "నమస్కారం KNR Gold, కస్టమ్ జ్యువెలరీ డిజైన్ చేయించుకోవాలి.",
  "Hello KNR Gold, I am interested in a custom lightweight jewellery design. Please assist me.": "నమస్కారం KNR Gold, తేలికైన కస్టమ్ ఆభరణం డిజైన్ చేయించుకోవాలనుకుంటున్నాను. దయచేసి సహాయం చేయండి.",
  "Hello KNR Gold, I want to enquire about jewellery remodelling.": "నమస్కారం KNR Gold, జ్యువెలరీ రీమోడలింగ్ గురించి వివరాలు కావాలి.",
  "Hello KNR Gold, I want to enquire about jewellery repair.": "నమస్కారం KNR Gold, ఆభరణాల రిపేర్ గురించి వివరాలు కావాలి.",
  "Hello KNR Gold, I want to enquire about jewellery polishing and cleaning.": "నమస్కారం KNR Gold, ఆభరణాల పాలిషింగ్ మరియు క్లీనింగ్ గురించి వివరాలు కావాలి.",
  "Hello KNR Gold, I want to enquire about ear piercing.": "నమస్కారం KNR Gold, చెవి కుట్టే సేవ గురించి వివరాలు కావాలి.",
  "Hello KNR Gold, please share today's gold and silver rate.": "నమస్కారం KNR Gold, ఈరోజు బంగారం మరియు వెండి ధరలు తెలియజేయండి.",
  "Hello KNR Gold, I need assistance regarding your jewellery or gold services. Please contact me.": "నమస్కారం KNR Gold, మీ జ్యువెలరీ లేదా గోల్డ్ సేవల గురించి సహాయం కావాలి. దయచేసి నన్ను సంప్రదించండి."
};
  const meta = {
  "en": {
    "title": "KNR Gold | Jewellery & Gold Services in Visakhapatnam",
    "description": "KNR Gold, Visakhapatnam – Diamond, Gold, Platinum and Silver Jewellery, old gold selling, pledged gold release, repairs, remodelling and custom jewellery services."
  },
  "te": {
    "title": "KNR Gold | విశాఖపట్నంలో జ్యువెలరీ & గోల్డ్ సేవలు",
    "description": "విశాఖపట్నంలోని KNR Gold లో డైమండ్, గోల్డ్, ప్లాటినం, సిల్వర్ జ్యువెలరీ, పాత బంగారం అమ్మకం, తాకట్టు బంగారం సహాయం, రిపేర్, రీమోడలింగ్ మరియు కస్టమ్ జ్యువెలరీ సేవలు."
  }
};

  const normalize = value => String(value ?? '').replace(/\s+/g, ' ').trim();
  let currentLanguage = localStorage.getItem(LANGUAGE_KEY) === 'te' ? 'te' : 'en';

  const textRecords = [];
  const placeholderRecords = [];
  const whatsappRecords = [];

  function collectLanguageContent() {
    const walker = document.createTreeWalker(
      document.body,
      NodeFilter.SHOW_TEXT,
      {
        acceptNode(node) {
          const parent = node.parentElement;
          if (!parent || ['SCRIPT', 'STYLE', 'NOSCRIPT'].includes(parent.tagName)) {
            return NodeFilter.FILTER_REJECT;
          }
          return normalize(node.nodeValue)
            ? NodeFilter.FILTER_ACCEPT
            : NodeFilter.FILTER_REJECT;
        }
      }
    );

    let node;
    while ((node = walker.nextNode())) {
      const original = node.nodeValue;
      const key = normalize(original);
      if (telugu[key]) {
        textRecords.push({
          node,
          original,
          key,
          leading: original.match(/^\s*/)?.[0] || '',
          trailing: original.match(/\s*$/)?.[0] || ''
        });
      }
    }

    document.querySelectorAll('[placeholder]').forEach(element => {
      const original = element.getAttribute('placeholder');
      if (placeholders[original]) {
        placeholderRecords.push({ element, original });
      }
    });

    document.querySelectorAll('#service option').forEach(option => {
      const english = normalize(option.textContent);
      option.dataset.serviceEnglish = english;
    });

    document.querySelectorAll('a[href*="wa.me"]').forEach(anchor => {
      try {
        const url = new URL(anchor.href);
        const englishMessage = url.searchParams.get('text');
        if (englishMessage && whatsappTelugu[englishMessage]) {
          whatsappRecords.push({
            anchor,
            baseUrl: `${url.origin}${url.pathname}`,
            englishMessage,
            teluguMessage: whatsappTelugu[englishMessage]
          });
        }
      } catch (error) {
        console.warn('WhatsApp link could not be prepared.', error);
      }
    });
  }

  function updateLanguageButtons(language) {
    document.querySelectorAll('[data-language-control] .lang-btn').forEach(button => {
      const active = button.dataset.lang === language;
      button.classList.toggle('active', active);
      button.setAttribute('aria-pressed', String(active));
    });
  }

  function updateWhatsAppLinks(language) {
    whatsappRecords.forEach(record => {
      const message = language === 'te'
        ? record.teluguMessage
        : record.englishMessage;
      record.anchor.href = `${record.baseUrl}?text=${encodeURIComponent(message)}`;
    });
  }

  function setLanguage(language, save = true) {
    currentLanguage = language === 'te' ? 'te' : 'en';

    document.documentElement.lang = currentLanguage;
    document.body.classList.toggle('telugu-language', currentLanguage === 'te');

    textRecords.forEach(record => {
      const value = currentLanguage === 'te'
        ? telugu[record.key]
        : normalize(record.original);
      record.node.nodeValue = `${record.leading}${value}${record.trailing}`;
    });

    placeholderRecords.forEach(record => {
      record.element.setAttribute(
        'placeholder',
        currentLanguage === 'te'
          ? placeholders[record.original]
          : record.original
      );
    });

    document.title = meta[currentLanguage].title;
    document.querySelector('meta[name="description"]')
      ?.setAttribute('content', meta[currentLanguage].description);

    updateLanguageButtons(currentLanguage);
    updateWhatsAppLinks(currentLanguage);

    if (save) {
      localStorage.setItem(LANGUAGE_KEY, currentLanguage);
    }
  }

  // Mobile drawer
  const menuToggle = document.getElementById('menuToggle');
  const menuClose = document.getElementById('menuClose');
  const navbar = document.getElementById('navbar');
  const overlay = document.getElementById('menuOverlay');

  function openMenu() {
    navbar?.classList.add('active');
    overlay?.classList.add('active');
    document.body.classList.add('drawer-open');
    navbar?.setAttribute('aria-hidden', 'false');
    menuToggle?.setAttribute('aria-expanded', 'true');
  }

  function closeMenu() {
    navbar?.classList.remove('active');
    overlay?.classList.remove('active');
    document.body.classList.remove('drawer-open');
    navbar?.setAttribute('aria-hidden', 'true');
    menuToggle?.setAttribute('aria-expanded', 'false');
  }

  menuToggle?.addEventListener('click', openMenu);
  menuClose?.addEventListener('click', closeMenu);
  overlay?.addEventListener('click', closeMenu);
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', closeMenu);
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') closeMenu();
  });

  // Hero slider: 6 seconds
  const slides = [...document.querySelectorAll('.hero-slide')];
  const dots = [...document.querySelectorAll('.slider-dot')];
  const previousButton = document.querySelector('.slider-prev');
  const nextButton = document.querySelector('.slider-next');
  const slider = document.querySelector('.hero-slider');
  let currentSlide = 0;
  let sliderTimer;

  function showSlide(index) {
    if (!slides.length) return;
    currentSlide = (index + slides.length) % slides.length;
    slides.forEach((slide, slideIndex) => {
      slide.classList.toggle('active', slideIndex === currentSlide);
    });
    dots.forEach((dot, dotIndex) => {
      dot.classList.toggle('active', dotIndex === currentSlide);
    });
  }

  function startSlider() {
    clearInterval(sliderTimer);
    if (slides.length > 1) {
      sliderTimer = setInterval(() => showSlide(currentSlide + 1), 6000);
    }
  }

  previousButton?.addEventListener('click', () => {
    showSlide(currentSlide - 1);
    startSlider();
  });

  nextButton?.addEventListener('click', () => {
    showSlide(currentSlide + 1);
    startSlider();
  });

  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      showSlide(Number(dot.dataset.slideTo));
      startSlider();
    });
  });

  slider?.addEventListener('mouseenter', () => clearInterval(sliderTimer));
  slider?.addEventListener('mouseleave', startSlider);

  let touchStartX = 0;
  slider?.addEventListener('touchstart', event => {
    touchStartX = event.changedTouches[0].clientX;
    clearInterval(sliderTimer);
  }, { passive: true });

  slider?.addEventListener('touchend', event => {
    const difference = event.changedTouches[0].clientX - touchStartX;
    if (Math.abs(difference) > 45) {
      showSlide(currentSlide + (difference < 0 ? 1 : -1));
    }
    startSlider();
  }, { passive: true });

  // Quick enquiry form
  document.getElementById('enquiryForm')?.addEventListener('submit', event => {
    event.preventDefault();

    const customerName = document.getElementById('name')?.value.trim() || '';
    const customerPhone = document.getElementById('phone')?.value.trim() || '';
    const serviceSelect = document.getElementById('service');
    const selectedOption = serviceSelect?.selectedOptions?.[0];
    const englishService = selectedOption?.dataset.serviceEnglish || '';
    const teluguService = serviceTelugu[englishService] || englishService;

    const message = currentLanguage === 'te'
      ? `నమస్కారం KNR Gold,\n\nపేరు: ${customerName}\nఫోన్: ${customerPhone}\nకావలసిన సేవ: ${teluguService}\n\nదయచేసి నన్ను సంప్రదించండి.`
      : `Hello KNR Gold,\n\nName: ${customerName}\nPhone: ${customerPhone}\nService required: ${englishService}\n\nPlease contact me.`;

    window.open(
      `https://wa.me/${BUSINESS_WHATSAPP}?text=${encodeURIComponent(message)}`,
      '_blank',
      'noopener'
    );
  });

  document.querySelectorAll('[data-language-control] .lang-btn').forEach(button => {
    button.addEventListener('click', () => setLanguage(button.dataset.lang));
  });

  collectLanguageContent();
  setLanguage(currentLanguage, false);
  showSlide(0);
  startSlider();
})();
