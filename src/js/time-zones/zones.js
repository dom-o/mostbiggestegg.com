const zones_to_places = {
	"Europe/Andorra": [{cities:['Andorra la Vella'], country:"Andorra"}],
	"Asia/Dubai": [{cities:['Dubai', 'Sharjah', 'Ajman City', 'Musaffah', 'Khalifah A City'], country:"United Arab Emirates"}],
	"Asia/Kabul": [{cities:['Kabul', 'Mazar-e Sharif', 'Kandahar', 'Jalalabad', 'Ghazni', 'Baghlan'], country:"Afghanistan"}],
	"America/Antigua": [{cities:["Saint John's"], country:"Antigua and Barbuda"}],
	"America/Anguilla": [{cities:['The Valley'], country:"Anguilla"}],
	"Europe/Tirane": [{cities:['Tirana', 'Elbasan', 'Shkoder', 'Fier-Cifci', 'Fier'], country:"Albania"}],
	"Asia/Yerevan": [{cities:['Yerevan', 'Vanadzor', 'Hrazdan', 'Kapan', 'Armavir'], country:"Armenia"}],
	"Africa/Luanda": [{cities:['Luanda', 'Huambo', 'Benguela', 'Lubango', 'Mocamedes'], country:"Angola"}],
	"America/Argentina/Buenos_Aires": [{cities:['Buenos Aires', 'Bahia Blanca', 'Quilmes', 'La Plata', 'Balvanera'], country:"Argentina"}],
	"America/Argentina/Catamarca": [{cities:['Catamarca', 'Trelew', 'Esquel'], country:"Argentina"}],
	"America/Argentina/Cordoba": [{cities:['Cordoba', 'Santa Fe', 'Posadas', 'Santiago del Estero', 'Formosa'], country:"Argentina"}],
	"America/Argentina/Jujuy": [{cities:['San Salvador de Jujuy', 'Libertador General San Martin'], country:"Argentina"}],
	"America/Argentina/La_Rioja": [{cities:['La Rioja'], country:"Argentina"}],
	"America/Argentina/Mendoza": [{cities:['San Rafael', 'San Martin'], country:"Argentina"}],
	"America/Argentina/Rio_Gallegos": [{cities:['Rio Gallegos'], country:"Argentina"}],
	"America/Argentina/Salta": [{cities:['Salta', 'Santa Rosa', 'Cipolletti', 'General Roca', 'General Pico'], country:"Argentina"}],
	"America/Argentina/San_Juan": [{cities:['San Juan', 'Santa Lucia', 'Caucete', 'Albardon'], country:"Argentina"}],
	"America/Argentina/San_Luis": [{cities:['San Luis'], country:"Argentina"}],
	"America/Argentina/Tucuman": [{cities:['San Miguel de Tucuman', 'Tafi Viejo', 'Aguilares', 'Monteros'], country:"Argentina"}],
	"America/Argentina/Ushuaia": [{cities:['Ushuaia'], country:"Argentina"}],
	"Pacific/Pago_Pago": [{cities:['Pago Pago'], country:"American Samoa"}],
	"Europe/Vienna": [{cities:['Vienna', 'Linz', 'Donaustadt', 'Salzburg', 'Ottakring'], country:"Austria"}],
	"Australia/Adelaide": [{cities:['Adelaide', 'Mount Gambier', 'Gawler', 'Parafield Gardens'], country:"Australia"}],
	"Australia/Brisbane": [{cities:['Brisbane', 'Logan City', 'Cairns', 'Mackay', 'Hervey Bay'], country:"Australia"}],
	"Australia/Broken_Hill": [{cities:['Broken Hill'], country:"Australia"}],
	"Australia/Darwin": [{cities:['Darwin', 'Palmerston'], country:"Australia"}],
	"Australia/Hobart": [{cities:['Hobart', 'Burnie'], country:"Australia"}],
	"Australia/Melbourne": [{cities:['Melbourne', 'Ballarat', 'Point Cook', 'Melbourne City Centre', 'Pakenham'], country:"Australia"}],
	"Australia/Perth": [{cities:['Perth', 'Bunbury', 'Geraldton', 'Albany', 'Ellenbrook'], country:"Australia"}],
	"Australia/Sydney": [{cities:['Sydney', 'Newcastle', 'Maitland', 'Blacktown', 'Dubbo'], country:"Australia"}],
	"America/Aruba": [{cities:['Oranjestad', 'San Nicolas'], country:"Aruba"}],
	"Europe/Mariehamn": [{cities:['Mariehamn'], country:"Åland Islands"}],
	"Asia/Baku": [{cities:['Baku', 'Ganja', 'Tovuz', 'Mingelchaur'], country:"Azerbaijan"}],
	"Europe/Sarajevo": [{cities:['Sarajevo', 'Zenica', 'Mostar', 'Lukavac', 'Brcko'], country:"Bosnia and Herzegovina"}],
	"America/Barbados": [{cities:['Bridgetown'], country:"Barbados"}],
	"Asia/Dhaka": [{cities:['Dhaka', 'Khulna', 'Comilla', 'Shibganj', 'Tungi'], country:"Bangladesh"}],
	"Europe/Brussels": [{cities:['Brussels', 'Gent', 'Liege', 'Schaerbeek', 'Namur'], country:"Belgium"}],
	"Africa/Ouagadougou": [{cities:['Ouagadougou', 'Koudougou', 'Kaya', 'Hounde', 'Dedougou'], country:"Burkina Faso"}],
	"Europe/Sofia": [{cities:['Sofia', 'Varna', 'Stara Zagora', 'Pleven', 'Pernik'], country:"Bulgaria"}],
	"Asia/Bahrain": [{cities:["Ar Rifa'", 'Al Muharraq', 'Madinat Hamad', 'Sitrah'], country:"Bahrain"}],
	"Africa/Bujumbura": [{cities:['Bujumbura', 'Gitega', 'Ngozi', 'Bururi', 'Kayanza'], country:"Burundi"}],
	"Africa/Porto-Novo": [{cities:['Cotonou', 'Djougou', 'Parakou', 'Kandi', 'Lokossa'], country:"Benin"}],
	"America/St_Barthelemy": [{cities:['Gustavia'], country:"Saint Barthélemy"}],
	"Atlantic/Bermuda": [{cities:['Hamilton'], country:"Bermuda"}],
	"Asia/Brunei": [{cities:['Bandar Seri Begawan', 'Seria'], country:"Brunei Darussalam"}],
	"America/La_Paz": [{cities:['La Paz', 'Cochabamba', 'Oruro', 'Quillacollo', 'Potosi'], country:"Plurinational State of Bolivia"}],
	"America/Kralendijk": [{cities:['Kralendijk'], country:"Bonaire, Sint Eustatius and Saba"}],
	"America/Araguaina": [{cities:['Palmas', 'Gurupi'], country:"Brazil"}],
	"America/Bahia": [{cities:['Salvador', 'Vitoria da Conquista', 'Camacari', 'Ilheus', 'Jequie'], country:"Brazil"}],
	"America/Belem": [{cities:['Belem', 'Ananindeua', 'Maraba', 'Santana', 'Abaetetuba'], country:"Brazil"}],
	"America/Boa_Vista": [{cities:['Boa Vista'], country:"Brazil"}],
	"America/Campo_Grande": [{cities:['Campo Grande', 'Corumba', 'Ponta Pora', 'Aquidauana', 'Coxim'], country:"Brazil"}],
	"America/Cuiaba": [{cities:['Cuiaba', 'Rondonopolis', 'Barra do Garcas', 'Pontes e Lacerda', 'Aripuana'], country:"Brazil"}],
	"America/Eirunepe": [{cities:['Eirunepe'], country:"Brazil"}],
	"America/Fortaleza": [{cities:['Fortaleza', 'Natal', 'Joao Pessoa', 'Caucaia', 'Juazeiro do Norte'], country:"Brazil"}],
	"America/Maceio": [{cities:['Maceio', 'Arapiraca', 'Sao Cristovao', 'Rio Largo', 'Marechal Deodoro'], country:"Brazil"}],
	"America/Manaus": [{cities:['Manaus', 'Parintins', 'Coari', 'Humaita', 'Rio Preto da Eva'], country:"Brazil"}],
	"America/Porto_Velho": [{cities:['Porto Velho', 'Vilhena', 'Cacoal', 'Guajara Mirim', 'Ouro Preto do Oeste'], country:"Brazil"}],
	"America/Recife": [{cities:['Recife', 'Jaboatao dos Guararapes', 'Paulista', 'Petrolina', 'Garanhuns'], country:"Brazil"}],
	"America/Rio_Branco": [{cities:['Rio Branco', 'Senador Guiomard', 'Tarauaca'], country:"Brazil"}],
	"America/Santarem": [{cities:['Santarem', 'Itaituba', 'Oriximina', 'Monte Alegre'], country:"Brazil"}],
	"America/Sao_Paulo": [{cities:['Sao Paulo', 'Belo Horizonte', 'Curitiba', 'Porto Alegre', 'Campinas'], country:"Brazil"}],
	"America/Nassau": [{cities:['Nassau', 'Freeport'], country:"Bahamas"}],
	"Asia/Thimphu": [{cities:['Thimphu', 'Tsirang'], country:"Bhutan"}],
	"Africa/Gaborone": [{cities:['Gaborone', 'Molepolole', 'Serowe', 'Mogoditshane', 'Mahalapye'], country:"Botswana"}],
	"Europe/Minsk": [{cities:['Minsk', 'Hrodna', 'Brest', 'Babruysk', 'Barysaw'], country:"Belarus"}],
	"America/Belize": [{cities:['Belize City', 'San Pedro', 'Belmopan'], country:"Belize"}],
	"America/Dawson_Creek": [{cities:['Fort St. John'], country:"Canada"}],
	"America/Edmonton": [{cities:['Calgary', 'Red Deer', 'Lethbridge', 'Medicine Hat', 'Grande Prairie'], country:"Canada"}],
	"America/Glace_Bay": [{cities:['Sydney'], country:"Canada"}],
	"America/Halifax": [{cities:['Halifax', 'Charlottetown', 'Cole Harbour'], country:"Canada"}],
	"America/Moncton": [{cities:['Moncton', 'Fredericton', 'Miramichi', 'Lutes Mountain'], country:"Canada"}],
	"America/Regina": [{cities:['Saskatoon', 'Prince Albert', 'North Battleford'], country:"Canada"}],
	"America/St_Johns": [{cities:["St. John's", 'Corner Brook'], country:"Canada"}],
	"America/Swift_Current": [{cities:['Swift Current'], country:"Canada"}],
	"America/Toronto": [{cities:['Toronto', 'Ottawa', 'Brampton', 'Hamilton', 'London'], country:"Canada"}],
	"America/Vancouver": [{cities:['Vancouver', 'Okanagan', 'Burnaby', 'Richmond', 'Abbotsford'], country:"Canada"}],
	"America/Whitehorse": [{cities:['Whitehorse'], country:"Canada"}],
	"America/Winnipeg": [{cities:['Winnipeg', 'Steinbach'], country:"Canada"}],
	"America/Yellowknife": [{cities:['Yellowknife'], country:"Canada"}],
	"Indian/Cocos": [{cities:['West Island'], country:"Cocos (Keeling) Islands"}],
	"Africa/Kinshasa": [{cities:['Kinshasa', 'Kikwit', 'Matadi', 'Bandundu', 'Bumba'], country:"Democratic Republic of the Congo"}],
	"Africa/Lubumbashi": [{cities:['Lubumbashi', 'Kisangani', 'Likasi', 'Tshikapa', 'Bukavu'], country:"Democratic Republic of the Congo"}],
	"Africa/Bangui": [{cities:['Bangui', 'Mbaiki', 'Kaga Bandoro', 'Carnot', 'Bambari'], country:"Central African Republic"}],
	"Africa/Brazzaville": [{cities:['Brazzaville', 'Dolisie', 'Owando', 'Loandjili', 'Gamboma'], country:"Congo"}],
	"Europe/Zurich": [{cities:['Zurich', 'Basel', 'Bern', 'Luzern', 'Lugano'], country:"Switzerland"}],
	"Africa/Abidjan": [{cities:['Abidjan', 'Bouake', 'Daloa', 'Gagnoa', 'Man'], country:"Côte d'Ivoire"}],
	"Pacific/Rarotonga": [{cities:['Avarua'], country:"Cook Islands"}],
	"America/Punta_Arenas": [{cities:['Punta Arenas'], country:"Chile"}],
	"America/Santiago": [{cities:['Santiago', 'Antofagasta', 'Valparaiso', 'San Bernardo', 'Temuco'], country:"Chile"}],
	"Africa/Douala": [{cities:['Douala', 'Garoua', 'Bamenda', 'Bafoussam', 'Ngaoundere'], country:"Cameroon"}],
	"Asia/Shanghai": [{cities:['Shanghai', 'Shenzhen', 'Chengdu', 'Wuhan', "Xi'an"], country:"China"}],
	"Asia/Urumqi": [{cities:['UEruemqi', 'Korla', 'Kashgar', 'Huocheng', 'Turpan'], country:"China"}],
	"America/Bogota": [{cities:['Bogota', 'Medellin', 'Cartagena', 'Bucaramanga', 'Santa Marta'], country:"Colombia"}],
	"America/Costa_Rica": [{cities:['San Jose', 'San Francisco', 'Liberia', 'Puntarenas', 'Curridabat'], country:"Costa Rica"}],
	"America/Havana": [{cities:['Havana', 'Camagueey', 'Guantanamo', 'Diez de Octubre', 'Las Tunas'], country:"Cuba"}],
	"Atlantic/Cape_Verde": [{cities:['Praia', 'Santa Maria'], country:"Cape Verde"}],
	"America/Curacao": [{cities:['Willemstad'], country:"Curaçao"}],
	"Indian/Christmas": [{cities:['Flying Fish Cove'], country:"Christmas Island"}],
	"Asia/Famagusta": [{cities:['Famagusta', 'Egkomi'], country:"Cyprus"}],
	"Asia/Nicosia": [{cities:['Nicosia', 'Larnaca', 'Kato Lakatameia', 'Morfou', 'Aradippou'], country:"Cyprus"}],
	"Europe/Prague": [{cities:['Prague', 'Ostrava', 'Liberec', 'Ceske Budejovice', 'Usti nad Labem'], country:"Czech Republic"}],
	"Europe/Berlin": [{cities:['Berlin', 'Munich', 'Frankfurt am Main', 'Duesseldorf'], country:"Germany"}],
	"Africa/Djibouti": [{cities:['Djibouti', 'Tadjourah'], country:"Djibouti"}],
	"Europe/Copenhagen": [{cities:['Copenhagen', 'Odense', 'Frederiksberg', 'Randers', 'Horsens'], country:"Denmark"}],
	"America/Dominica": [{cities:['Roseau'], country:"Dominica"}],
	"America/Santo_Domingo": [{cities:['Santo Domingo', 'Santo Domingo Oeste', 'San Pedro de Macoris', 'Bella Vista', 'Puerto Plata'], country:"Dominican Republic"}],
	"Africa/Algiers": [{cities:['Algiers', 'Oran', 'Constantine', 'Setif', 'Bab Ezzouar'], country:"Algeria"}],
	"America/Guayaquil": [{cities:['Quito', 'Cuenca', 'Ambato', 'Eloy Alfaro', 'Loja'], country:"Ecuador"}],
	"Europe/Tallinn": [{cities:['Tallinn', 'Narva', 'Nomme', 'Viljandi'], country:"Estonia"}],
	"Africa/Cairo": [{cities:['Cairo', 'Giza', 'Port Said', 'Madinat an Nasr', 'Al Mahallah al Kubra'], country:"Egypt"}],
	"Africa/El_Aaiun": [{cities:['Laayoune', 'Boujdour'], country:"Western Sahara (Morocco)"}],
	"Africa/Asmara": [{cities:['Asmara', 'Massawa', 'Mendefera'], country:"Eritrea"}],
	"Africa/Ceuta": [{cities:['Melilla'], country:"Spain"}],
	"Atlantic/Canary": [{cities:['Las Palmas de Gran Canaria', 'La Laguna', 'Arona', 'Arrecife', 'Adeje'], country:"Spain"}],
	"Europe/Madrid": [{cities:['Madrid', 'Valencia', 'Zaragoza', 'Murcia', 'Bilbao'], country:"Spain"}],
	"Africa/Addis_Ababa": [{cities:['Addis Ababa', 'Gondar', 'Nazret', 'Bahir Dar', 'Dese'], country:"Ethiopia"}],
	"Europe/Helsinki": [{cities:['Helsinki', 'Tampere', 'Turku', 'Jyvaeskylae', 'Lahti'], country:"Finland"}],
	"Pacific/Fiji": [{cities:['Nasinu', 'Lautoka', 'Labasa'], country:"Fiji"}],
	"Atlantic/Stanley": [{cities:['Stanley'], country:"Falkland Islands (Malvinas)"}],
	"Pacific/Pohnpei": [{cities:['Palikir - National Government Center'], country:"Federated States of Micronesia"}],
	"Atlantic/Faroe": [{cities:['Torshavn'], country:"Faroe Islands"}],
	"Europe/Paris": [{cities:['Paris', 'Lyon', 'Nice', 'Strasbourg', 'Montpellier'], country:"France"}],
	"Africa/Libreville": [{cities:['Libreville', 'Franceville', 'Moanda', 'Lambarene', 'Koulamoutou'], country:"Gabon"}],
	"Europe/London": [{cities:['London', 'Liverpool', 'Sheffield', 'Edinburgh', 'Cardiff'], country:"United Kingdom"}],
	"America/Grenada": [{cities:["Saint George's"], country:"Grenada"}],
	"Asia/Tbilisi": [{cities:['Tbilisi', 'Kutaisi', 'Sokhumi', "P'ot'i", "Ts'khinvali"], country:"Georgia"}],
	"America/Cayenne": [{cities:['Cayenne', 'Saint-Laurent-du-Maroni', 'Remire-Montjoly'], country:"French Guiana"}],
	"Europe/Guernsey": [{cities:['Saint Peter Port'], country:"Guernsey"}],
	"Africa/Accra": [{cities:['Accra', 'Tamale', 'Atsiaman', 'Teshi Old Town', 'Sekondi-Takoradi'], country:"Ghana"}],
	"Europe/Gibraltar": [{cities:['Gibraltar'], country:"Gibraltar"}],
	"America/Nuuk": [{cities:['Nuuk'], country:"Greenland"}],
	"Africa/Banjul": [{cities:['Serekunda', 'Bakau', 'Farafenni', 'Sukuta'], country:"Gambia"}],
	"Africa/Conakry": [{cities:['Camayenne', 'Nzerekore', 'Kankan', 'Gueckedou', 'Labe'], country:"Guinea"}],
	"America/Guadeloupe": [{cities:['Les Abymes', 'Le Gosier', 'Sainte-Anne', 'Sainte-Rose', 'Pointe-a-Pitre'], country:"Guadeloupe"}],
	"Africa/Malabo": [{cities:['Bata', 'Ebebiyin'], country:"Equatorial Guinea"}],
	"Europe/Athens": [{cities:['Athens', 'Patra', 'Larisa', 'Irakleion', 'Acharnes'], country:"Greece"}],
	"Atlantic/South_Georgia": [{cities:['Grytviken'], country:"South Georgia and the South Sandwich Islands"}],
	"America/Guatemala": [{cities:['Guatemala City', 'Mixco', 'Quetzaltenango', 'Escuintla', 'Jutiapa'], country:"Guatemala"}],
	"Pacific/Guam": [{cities:['Dededo Village', 'Tamuning-Tumon-Harmon Village', 'Tamuning', 'Mangilao Village', 'Guam Government House'], country:"Guam"}],
	"Africa/Bissau": [{cities:['Bissau'], country:"Guinea-Bissau"}],
	"America/Guyana": [{cities:['Georgetown', 'New Amsterdam'], country:"Guyana"}],
	"Asia/Hong_Kong": [{cities:['Hong Kong', 'Victoria', 'Sha Tin', 'Tseung Kwan O', 'Tsuen Wan'], country:"Hong Kong"}],
	"America/Tegucigalpa": [{cities:['Tegucigalpa', 'La Ceiba', 'El Progreso', 'Comayagua', 'La Lima'], country:"Honduras"}],
	"Europe/Zagreb": [{cities:['Zagreb', 'Rijeka', 'Zadar', 'Pula', 'Karlovac'], country:"Croatia"}],
	"America/Port-au-Prince": [{cities:['Port-au-Prince', 'Delmas 73', 'Petionville', 'Jacmel', 'Leogane'], country:"Haiti"}],
	"Europe/Budapest": [{cities:['Budapest', 'Szeged', 'Pecs', 'Zuglo', 'Budapest III. keruelet'], country:"Hungary"}],
	"Asia/Jakarta": [{cities:['Jakarta', 'Bekasi', 'Medan', 'Tangerang', 'Semarang'], country:"Indonesia"}],
	"Asia/Jayapura": [{cities:['Jayapura', 'Sorong', 'Manokwari', 'Tual', 'Amahai'], country:"Indonesia"}],
	"Asia/Makassar": [{cities:['Makassar', 'Denpasar', 'Banjarmasin', 'Kupang', 'Palu'], country:"Indonesia"}],
	"Asia/Pontianak": [{cities:['Pontianak', 'Singkawang', 'Sungai Raya', 'Pangkalanbuun', 'Pemangkat'], country:"Indonesia"}],
	"Europe/Dublin": [{cities:['Dublin', 'Cork', 'Galway', 'Waterford', 'Drogheda'], country:"Ireland"}],
	"Asia/Jerusalem": [{cities:['Jerusalem', 'West Jerusalem', 'Rishon LeTsiyyon', 'Netanya', 'Bnei Brak'], country:"Israel"}],
	"Europe/Isle_of_Man": [{cities:['Douglas'], country:"Isle of Man"}],
	"Asia/Kolkata": [{cities:['Mumbai', 'Bengaluru', 'Ahmedabad', 'Kolkata', 'Pune'], country:"India"}],
	"Asia/Baghdad": [{cities:['Baghdad', 'Al Basrah al Qadimah', 'Erbil', 'Karbala', 'Abu Ghurayb'], country:"Iraq"}],
	"Asia/Tehran": [{cities:['Tehran', 'Isfahan', 'Tabriz', 'Qom', 'Pasragad Branch'], country:"Islamic Republic of Iran"}],
	"Atlantic/Reykjavik": [{cities:['Reykjavik', 'Hafnarfjoerdur', 'Akureyri'], country:"Iceland"}],
	"Europe/Rome": [{cities:['Rome', 'Naples', 'Palermo', 'Bologna', 'Bari'], country:"Italy"}],
	"Europe/Jersey": [{cities:['Saint Helier'], country:"Jersey"}],
	"America/Jamaica": [{cities:['Kingston', 'Spanish Town', 'Montego Bay', 'May Pen', 'Linstead'], country:"Jamaica"}],
	"Asia/Amman": [{cities:['Amman', 'Irbid', 'Wadi as Sir', "'Ajlun", 'Aqaba'], country:"Jordan"}],
	"Asia/Tokyo": [{cities:['Tokyo', 'Osaka', 'Sapporo', 'Kawasaki', 'Kyoto'], country:"Japan"}],
	"Africa/Nairobi": [{cities:['Nairobi', 'Mombasa', 'Eldoret', 'Kikuyu', 'Thika'], country:"Kenya"}],
	"Asia/Bishkek": [{cities:['Bishkek', 'Jalal-Abad', 'Tokmok', 'Kara-Balta', 'Naryn'], country:"Kyrgyzstan"}],
	"Asia/Phnom_Penh": [{cities:['Phnom Penh', 'Siem Reap', 'Paoy Paet', 'Sihanoukville', 'Pursat'], country:"Cambodia"}],
	"Pacific/Tarawa": [{cities:['Tarawa'], country:"Kiribati"}],
	"Indian/Comoro": [{cities:['Moroni'], country:"Comoros"}],
	"America/St_Kitts": [{cities:['Basseterre'], country:"Saint Kitts and Nevis"}],
	"Asia/Pyongyang": [{cities:['Pyongyang', "Namp'o", 'Hungnam', 'Wonsan', 'Sariwon'], country:"Democratic People's Republic of Korea"}],
	"Asia/Seoul": [{cities:['Seoul', 'Incheon', 'Gwangju', 'Suwon', 'Seongnam-si'], country:"Republic of Korea"}],
	"Asia/Kuwait": [{cities:['Al Ahmadi', 'As Salimiyah', 'Al Farwaniyah', 'Kuwait City', 'Ar Riqqah'], country:"Kuwait"}],
	"America/Cayman": [{cities:['George Town'], country:"Cayman Islands"}],
	"Asia/Almaty": [{cities:['Almaty', 'Karagandy', 'Astana', 'Ust-Kamenogorsk', 'Turkestan'], country:"Kazakhstan"}],
	"Asia/Aqtau": [{cities:['Shevchenko'], country:"Kazakhstan"}],
	"Asia/Aqtobe": [{cities:['Aktobe', 'Shalqar', 'Embi'], country:"Kazakhstan"}],
	"Asia/Atyrau": [{cities:['Atyrau', 'Shalkar'], country:"Kazakhstan"}],
	"Asia/Oral": [{cities:['Oral'], country:"Kazakhstan"}],
	"Asia/Qostanay": [{cities:['Kostanay', 'Baikonur', 'Arkalyk'], country:"Kazakhstan"}],
	"Asia/Qyzylorda": [{cities:['Kyzylorda', 'Aral', 'Zhangaqorghan', 'Tasbuget'], country:"Kazakhstan"}],
	"Asia/Vientiane": [{cities:['Vientiane', 'Pakse', 'Luang Prabang', 'Muang Phonsavan'], country:"Lao People's Democratic Republic"}],
	"Asia/Beirut": [{cities:['Beirut', 'Tripoli', 'Tyre', 'Habbouch', 'Zahle'], country:"Lebanon"}],
	"America/St_Lucia": [{cities:['Castries'], country:"Saint Lucia"}],
	"Europe/Vaduz": [{cities:['Vaduz'], country:"Liechtenstein"}],
	"Asia/Colombo": [{cities:['Colombo', 'Maharagama', 'Moratuwa', 'Pita Kotte', 'Kandy'], country:"Sri Lanka"}],
	"Africa/Monrovia": [{cities:['Monrovia', 'Kakata', 'Harper', 'Buchanan', 'New Yekepa'], country:"Liberia"}],
	"Africa/Maseru": [{cities:['Maseru', 'Mafeteng', 'Butha-Buthe', 'Quthing', 'Thaba-Tseka'], country:"Lesotho"}],
	"Europe/Vilnius": [{cities:['Vilnius', 'Klaipeda', 'Panevezys', 'Alytus', 'Eiguliai'], country:"Lithuania"}],
	"Europe/Luxembourg": [{cities:['Luxembourg', 'Dudelange'], country:"Luxembourg"}],
	"Europe/Riga": [{cities:['Riga', 'Liepaja', 'Jurmala', 'Rezekne', 'Valmiera'], country:"Latvia"}],
	"Africa/Tripoli": [{cities:['Tripoli', 'Ajdabiya', 'Tarhuna', 'Az Zawiyah', 'Al Ajaylat'], country:"Libya"}],
	"Africa/Casablanca": [{cities:['Casablanca', 'Fes', 'Marrakesh', 'Tangier', 'Oujda-Angad'], country:"Morocco"}],
	"Europe/Monaco": [{cities:['Monaco'], country:"Monaco"}],
	"Europe/Chisinau": [{cities:['Chisinau', 'Balti', 'Ribnita', 'Ungheni', 'Orhei'], country:"Republic of Moldova"}],
	"Europe/Podgorica": [{cities:['Podgorica', 'Herceg Novi', 'Budva', 'Bijelo Polje'], country:"Montenegro"}],
	"America/Marigot": [{cities:['Marigot'], country:"Saint Martin (French part)"}],
	"Indian/Antananarivo": [{cities:['Antananarivo', 'Antsirabe', 'Fianarantsoa', 'Antsiranana', 'Sambava'], country:"Madagascar"}],
	"Pacific/Majuro": [{cities:['Majuro'], country:"Marshall Islands"}],
	"Europe/Skopje": [{cities:['Skopje', 'Prilep', 'Cair', 'Kisela Voda', 'Gostivar'], country:"Former Yugoslav Republic of Macedonia"}],
	"Africa/Bamako": [{cities:['Bamako', 'Sikasso', 'Koutiala', 'Kayes', 'Kolokani'], country:"Mali"}],
	"Asia/Yangon": [{cities:['Yangon', 'Nay Pyi Taw', 'Kyain Seikgyi Township', 'Pathein', 'Sittwe'], country:"Myanmar"}],
	"Asia/Choibalsan": [{cities:['Baruun-Urt'], country:"Mongolia"}],
	"Asia/Hovd": [{cities:['Ulaangom', 'OElgii', 'Uliastay'], country:"Mongolia"}],
	"Asia/Ulaanbaatar": [{cities:['Ulan Bator', 'Darhan', 'Bayanhongor', 'Hovd', 'Suehbaatar', 'Undurkhaan'], country:"Mongolia"}],
	"Asia/Macau": [{cities:['Macau'], country:"Macao"}],
	"Pacific/Saipan": [{cities:['Saipan'], country:"Northern Mariana Islands"}],
	"America/Martinique": [{cities:['Fort-de-France', 'Le Robert', 'Le Francois', 'Saint-Joseph'], country:"Martinique"}],
	"Africa/Nouakchott": [{cities:['Nouakchott', 'Dar Naim', 'Kaedi', 'Tevragh Zeina', 'Zouerate'], country:"Mauritania"}],
	"America/Montserrat": [{cities:['Brades'], country:"Montserrat"}],
	"Europe/Malta": [{cities:['San Pawl il-Bahar', 'Mosta', 'Qormi', 'Valletta'], country:"Malta"}],
	"Indian/Mauritius": [{cities:['Port Louis', 'Beau Bassin-Rose Hill', 'Quatre Bornes', 'Goodlands', 'Bel Air Riviere Seche'], country:"Mauritius"}],
	"Indian/Maldives": [{cities:['Male'], country:"Maldives"}],
	"Africa/Blantyre": [{cities:['Lilongwe', 'Mzuzu', 'Kasungu', 'Karonga', 'Nkhotakota'], country:"Malawi"}],
	"America/Bahia_Banderas": [{cities:['Mezcales'], country:"Mexico"}],
	"America/Cancun": [{cities:['Cancun', 'Playa del Carmen', 'Felipe Carrillo Puerto'], country:"Mexico"}],
	"America/Chihuahua": [{cities:['Chihuahua', 'Cuauhtemoc', 'Nuevo Casas Grandes', 'Jose Mariano Jimenez', 'Aldama'], country:"Mexico"}],
	"America/Ciudad_Juarez": [{cities:['Ciudad Juarez'], country:"Mexico"}],
	"America/Hermosillo": [{cities:['Hermosillo', 'Nogales', 'Navojoa', 'Agua Prieta', 'Puerto Penasco'], country:"Mexico"}],
	"America/Matamoros": [{cities:['Reynosa', 'Nuevo Laredo', 'Ciudad Acuna', 'Anahuac'], country:"Mexico"}],
	"America/Mazatlan": [{cities:['Culiacan', 'Tepic', 'La Paz', 'San Jose del Cabo', 'Guamuchil'], country:"Mexico"}],
	"America/Merida": [{cities:['Merida', 'Ciudad del Carmen', 'Valladolid', 'Uman', 'Ticul'], country:"Mexico"}],
	"America/Mexico_City": [{cities:['Mexico City', 'Leon de los Aldama', 'Ecatepec de Morelos', 'Zapopan', 'Gustavo Adolfo Madero'], country:"Mexico"}],
	"America/Monterrey": [{cities:['Monterrey', 'Saltillo', 'Victoria de Durango', 'San Nicolas de los Garza', 'Ciudad Victoria'], country:"Mexico"}],
	"America/Ojinaga": [{cities:['Manuel Ojinaga'], country:"Mexico"}],
	"America/Tijuana": [{cities:['Tijuana', 'Ensenada', 'Tecate', 'Santa Isabel', 'Rodolfo Sanchez Taboada'], country:"Mexico"}],
	"Asia/Kuala_Lumpur": [{cities:['Kuala Lumpur', 'Klang', 'Ipoh', 'Shah Alam', 'Malacca'], country:"Malaysia"}],
	"Asia/Kuching": [{cities:['Kota Kinabalu', 'Kuching', 'Miri', 'Bintulu', 'Marudi'], country:"Malaysia"}],
	"Africa/Maputo": [{cities:['Maputo', 'Nampula', 'Chimoio', 'Tete', 'Lichinga'], country:"Mozambique"}],
	"Africa/Windhoek": [{cities:['Windhoek', 'Walvis Bay', 'Swakopmund', 'Grootfontein', 'Katutura'], country:"Namibia"}],
	"Pacific/Noumea": [{cities:['Noumea', 'Dumbea'], country:"New Caledonia"}],
	"Africa/Niamey": [{cities:['Niamey', 'Maradi', 'Alaghsas', 'Dosso', 'Tessaoua'], country:"Niger"}],
	"Pacific/Norfolk": [{cities:['Kingston'], country:"Norfolk Island"}],
	"Africa/Lagos": [{cities:['Lagos', 'Ibadan', 'Benin City', 'Onitsha', 'Zaria'], country:"Nigeria"}],
	"America/Managua": [{cities:['Managua', 'Masaya', 'Matagalpa', 'Granada', 'Jinotega'], country:"Nicaragua"}],
	"Europe/Amsterdam": [{cities:['Amsterdam', 'The Hague', 'Groningen', 'Tilburg', 'Breda'], country:"Netherlands"}],
	"Europe/Oslo": [{cities:['Oslo', 'Trondheim', 'Drammen', 'Lillestrom', 'Fredrikstad'], country:"Norway"}],
	"Asia/Kathmandu": [{cities:['Kathmandu', 'Patan', 'Biratnagar', 'Pokhara', 'Dharan'], country:"Nepal"}],
	"Pacific/Nauru": [{cities:['Yaren'], country:"Nauru"}],
	"Pacific/Niue": [{cities:['Alofi'], country:"Niue"}],
	"Pacific/Auckland": [{cities:['Auckland', 'Christchurch', 'North Shore', 'Tauranga', 'Lower Hutt'], country:"New Zealand"}],
	"Asia/Muscat": [{cities:['Muscat', 'Bawshar', 'Salalah', 'Rustaq', 'As Suwayq'], country:"Oman"}],
	"America/Panama": [{cities:['Panama', 'Juan Diaz', 'Arraijan', 'Las Cumbres', 'Pedregal'], country:"Panama"}],
	"America/Lima": [{cities:['Lima', 'Arequipa', 'Chiclayo', 'Huancayo', 'Iquitos'], country:"Peru"}],
	"Pacific/Tahiti": [{cities:['Faaa', 'Punaauia'], country:"French Polynesia"}],
	"Pacific/Bougainville": [{cities:['Arawa'], country:"Papua New Guinea"}],
	"Pacific/Port_Moresby": [{cities:['Port Moresby', 'Mount Hagen', 'Madang', 'Mendi', 'Goroka'], country:"Papua New Guinea"}],
	"Asia/Manila": [{cities:['Quezon City', 'Manila', 'Budta', 'Cebu City', 'General Santos'], country:"Philippines"}],
	"Asia/Karachi": [{cities:['Karachi', 'Faisalabad', 'Multan', 'Gujranwala', 'Rahim Yar Khan'], country:"Pakistan"}],
	"Europe/Warsaw": [{cities:['Warsaw', 'Krakow', 'Poznan', 'Szczecin', 'Lublin'], country:"Poland"}],
	"America/Miquelon": [{cities:['Saint-Pierre'], country:"Saint Pierre and Miquelon"}],
	"Pacific/Pitcairn": [{cities:['Adamstown'], country:"Pitcairn"}],
	"America/Puerto_Rico": [{cities:['San Juan', 'Carolina', 'Arecibo', 'Guaynabo', 'Mayagueez'], country:"Puerto Rico"}],
	"Asia/Gaza": [{cities:['Gaza', 'Jabalya', 'Dayr al Balah', 'Bayt Hanun', 'Al Burayj', 'Battir'], country:"Palestine"}],
	"Asia/Hebron": [{cities:['East Jerusalem', 'Nablus', 'Qalqilyah', 'Al Birah', 'Janin'], country:"Palestine"}],
	"Atlantic/Azores": [{cities:['Ponta Delgada'], country:"Portugal"}],
	"Atlantic/Madeira": [{cities:['Funchal', 'Sao Martinho'], country:"Portugal"}],
	"Europe/Lisbon": [{cities:['Lisbon', 'Amadora', 'Setubal', 'Queluz', 'Vila Nova de Gaia'], country:"Portugal"}],
	"Pacific/Palau": [{cities:['Ngerulmud'], country:"Palau"}],
	"America/Asuncion": [{cities:['Asuncion', 'San Lorenzo', 'Lambare', 'Limpio', 'Pedro Juan Caballero'], country:"Paraguay"}],
	"Asia/Qatar": [{cities:['Doha', 'Umm Salal Muhammad', 'Al Khawr'], country:"Qatar"}],
	"Indian/Reunion": [{cities:['Saint-Denis', 'Le Tampon', 'Saint-Andre', 'Saint-Benoit', 'Le Port'], country:"Réunion"}],
	"Europe/Bucharest": [{cities:['Bucharest', 'Iasi', 'Sector 2', 'Cluj-Napoca', 'Craiova'], country:"Romania"}],
	"Europe/Belgrade": [{cities:['Belgrade', 'Novi Sad', 'Kragujevac', 'Subotica', 'Novi Pazar'], country:"Serbia"}, {cities:['Pristina', 'Mitrovice', 'Suva Reka', 'Glogovac', 'Decan'], country:"Kosovo"}],
	"Asia/Anadyr": [{cities:['Anadyr'], country:"Russian Federation"}],
	"Asia/Barnaul": [{cities:['Barnaul', 'Rubtsovsk', 'Novoaltaysk', "Kamen'-na-Obi", 'Aleysk'], country:"Russian Federation"}],
	"Asia/Chita": [{cities:['Chita', 'Borzya', 'Aginskoye'], country:"Russian Federation"}],
	"Asia/Irkutsk": [{cities:['Irkutsk', 'Bratsk', "Ust'-Ilimsk", 'Cheremkhovo', "Ust'-Kut"], country:"Russian Federation"}],
	"Asia/Kamchatka": [{cities:['Petropavlovsk-Kamchatsky', 'Vilyuchinsk'], country:"Russian Federation"}],
	"Asia/Krasnoyarsk": [{cities:['Krasnoyarsk', 'Norilsk', 'Kyzyl', 'Zheleznogorsk', 'Chernogorsk'], country:"Russian Federation"}],
	"Asia/Magadan": [{cities:['Magadan'], country:"Russian Federation"}],
	"Asia/Novokuznetsk": [{cities:['Kemerovo', "Prokop'yevsk", 'Kiselevsk', 'Yurga', 'Belovo'], country:"Russian Federation"}],
	"Asia/Novosibirsk": [{cities:['Novosibirsk', 'Iskitim', 'Kuybyshev', 'Karasuk', "Ob'"], country:"Russian Federation"}],
	"Asia/Omsk": [{cities:['Omsk', 'Kalachinsk'], country:"Russian Federation"}],
	"Asia/Sakhalin": [{cities:['Yuzhno-Sakhalinsk', 'Kholmsk', "Nevel'sk"], country:"Russian Federation"}],
	"Asia/Tomsk": [{cities:['Tomsk', 'Strezhevoy', 'Asino'], country:"Russian Federation"}],
	"Asia/Vladivostok": [{cities:['Khabarovsk', 'Khabarovsk Vtoroy', 'Ussuriysk', 'Artem', "Arsen'yev"], country:"Russian Federation"}],
	"Asia/Yakutsk": [{cities:['Yakutsk', 'Belogorsk', 'Svobodnyy', 'Tynda', 'Aldan'], country:"Russian Federation"}],
	"Asia/Yekaterinburg": [{cities:['Yekaterinburg', 'Ufa', 'Tyumen', 'Magnitogorsk', 'Kurgan'], country:"Russian Federation"}],
	"Europe/Astrakhan": [{cities:['Astrakhan', 'Znamensk', 'Kamyzyak'], country:"Russian Federation"}],
	"Europe/Kaliningrad": [{cities:['Kaliningrad', 'Sovetsk', 'Gusev', 'Zelenogradsk'], country:"Russian Federation"}],
	"Europe/Kirov": [{cities:['Kirov', 'Vyatskiye Polyany', "Kotel'nich", 'Yaransk'], country:"Russian Federation"}],
	"Europe/Moscow": [{cities:['Moscow', 'Nizhniy Novgorod', 'Rostov-na-Donu', 'Krasnodar', 'Makhachkala'], country:"Russian Federation"}],
	"Europe/Samara": [{cities:['Samara', 'Izhevsk', 'Novokuybyshevsk', 'Sarapul', 'Chapayevsk'], country:"Russian Federation"}],
	"Europe/Saratov": [{cities:['Saratov', 'Engels', "Vol'sk", 'Pugachev', 'Marks'], country:"Russian Federation"}],
	"Europe/Ulyanovsk": [{cities:['Ulyanovsk', 'Inza', "Novoul'yanovsk"], country:"Russian Federation"}],
	"Europe/Volgograd": [{cities:['Volgograd', 'Kamyshin', 'Uryupinsk', 'Kalach-na-Donu', 'Surovikino'], country:"Russian Federation"}],
	"Africa/Kigali": [{cities:['Kigali', 'Butare', 'Musanze', 'Cyangugu', 'Rwamagana'], country:"Rwanda"}],
	"Asia/Riyadh": [{cities:['Jeddah', 'Mecca', 'Dammam', 'Buraydah', 'Tabuk'], country:"Saudi Arabia"}],
	"Pacific/Guadalcanal": [{cities:['Honiara'], country:"Solomon Islands"}],
	"Indian/Mahe": [{cities:['Victoria'], country:"Seychelles"}],
	"Africa/Khartoum": [{cities:['Khartoum', 'Nyala', 'Kassala', 'Al Qadarif', 'Wad Medani'], country:"Sudan"}],
	"Europe/Stockholm": [{cities:['Stockholm', 'Malmoe', 'Linkoeping', 'Sollentuna', 'Vaesteras'], country:"Sweden"}],
	"Asia/Singapore": [{cities:['Singapore', 'Geylang', 'Marine Parade'], country:"Singapore"}],
	"Atlantic/St_Helena": [{cities:['Jamestown'], country:"Saint Helena, Ascension and Tristan da Cunha"}],
	"Europe/Ljubljana": [{cities:['Ljubljana', 'Kranj', 'Koper', 'Novo Mesto', 'Trbovlje'], country:"Slovenia"}],
	"Arctic/Longyearbyen": [{cities:['Longyearbyen'], country:"Svalbard and Jan Mayen"}],
	"Europe/Bratislava": [{cities:['Bratislava', 'Nitra', 'Zilina', 'Trnava', 'Poprad'], country:"Slovakia"}],
	"Africa/Freetown": [{cities:['Freetown', 'Kenema', 'Makeni', 'Lunsar', 'Goderich'], country:"Sierra Leone"}],
	"Europe/San_Marino": [{cities:['San Marino'], country:"San Marino"}],
	"Africa/Dakar": [{cities:['Dakar', 'Touba', 'Saint-Louis', 'Kaolack', 'Tiebo'], country:"Senegal"}],
	"Africa/Mogadishu": [{cities:['Mogadishu', 'Berbera', 'Marka', 'Cabudwaaq', 'Burao'], country:"Somalia"}],
	"America/Paramaribo": [{cities:['Paramaribo'], country:"Suriname"}],
	"Africa/Juba": [{cities:['Juba', 'Yei', 'Wau', 'Pajok', 'Yambio'], country:"South Sudan"}],
	"Africa/Sao_Tome": [{cities:['Sao Tome'], country:"Sao Tome and Principe"}],
	"America/El_Salvador": [{cities:['San Salvador', 'San Miguel', 'Mejicanos', 'Apopa', 'Sonsonate'], country:"El Salvador"}],
	"America/Lower_Princes": [{cities:['Philipsburg'], country:"Sint Maarten (Dutch part)"}],
	"Asia/Damascus": [{cities:['Aleppo', 'Homs', 'Ar Raqqah', 'Tartus', 'Deir ez-Zor'], country:"Syrian Arab Republic"}],
	"Africa/Mbabane": [{cities:['Manzini', 'Lobamba'], country:"Swaziland"}],
	"America/Grand_Turk": [{cities:['Cockburn Town'], country:"Turks and Caicos Islands"}],
	"Africa/Ndjamena": [{cities:["N'Djamena", 'Sarh', 'Kelo', 'Pala', 'Bongor'], country:"Chad"}],
	"Indian/Kerguelen": [{cities:['Port-aux-Francais'], country:"French Southern Territories"}],
	"Africa/Lome": [{cities:['Lome', 'Kara', 'Kpalime', 'Tsevie', 'Mango'], country:"Togo"}],
	"Asia/Bangkok": [{cities:['Bangkok', 'Mueang Nonthaburi', 'Hat Yai', 'Si Racha', 'Lampang'], country:"Thailand"}, {cities:['Hanoi', 'Hue', 'Chi Linh', 'GJong Hoi', 'Ha Long'], country:"Vietnam"}],
	"Asia/Dushanbe": [{cities:['Dushanbe', 'Istaravshan', 'Konibodom', 'Bokhtar', 'Vahdat'], country:"Tajikistan"}],
	"Asia/Dili": [{cities:['Dili', 'Suai', 'Aileu', 'Maubara'], country:"Timor-Leste"}],
	"Asia/Ashgabat": [{cities:['Ashgabat', 'Dasoguz', 'Balkanabat', 'Turkmenbasy', 'Abadan'], country:"Turkmenistan"}],
	"Africa/Tunis": [{cities:['Tunis', 'Sousse', 'Bizerte', 'Ariana', 'Kasserine'], country:"Tunisia"}],
	"Pacific/Tongatapu": [{cities:["Nuku'alofa"], country:"Tonga"}],
	"Europe/Istanbul": [{cities:['Istanbul', 'Bursa', 'Gaziantep', 'Adana', 'Antalya'], country:"Turkey"}],
	"America/Port_of_Spain": [{cities:['Chaguanas', 'San Fernando', 'Rio Claro', 'Marabella', 'Point Fortin'], country:"Trinidad and Tobago"}],
	"Pacific/Funafuti": [{cities:['Funafuti'], country:"Tuvalu"}],
	"Asia/Taipei": [{cities:['Taipei', 'Taichung', 'Banqiao', 'Taoyuan City', 'Hualien City'], country:"Taiwan, Province of China"}],
	"Africa/Dar_es_Salaam": [{cities:['Dar es Salaam', 'Zanzibar', 'Mbeya', 'Tanga', 'Kigoma'], country:"United Republic of Tanzania"}],
	"Europe/Kyiv": [{cities:['Kyiv', 'Odesa', 'Donetsk', 'Zaporizhzhya', 'Mykolayiv'], country:"Ukraine"}],
	"Europe/Simferopol": [{cities:['Sevastopol', 'Kerch', 'Yalta', 'Dzhankoi', 'Alushta'], country:"Ukraine"}],
	"Africa/Kampala": [{cities:['Kampala', 'Lira', 'Jinja', 'Mbale', 'Mukono'], country:"Uganda"}],
	"America/Anchorage": [{cities:['Anchorage', 'Eagle River'], country:"United States"}],
	"America/Boise": [{cities:['Boise', 'Nampa', 'Pocatello', 'Twin Falls', 'Eagle'], country:"United States"}],
	"America/Chicago": [{cities:['Chicago', 'San Antonio', 'Austin', 'Nashville', 'New South Memphis'], country:"United States"}],
	"America/Denver": [{cities:['Denver', 'Albuquerque', 'Aurora', 'Fort Collins', 'West Valley City'], country:"United States"}],
	"America/Detroit": [{cities:['Detroit', 'Warren', 'Ann Arbor', 'Clinton Township', 'Dearborn'], country:"United States"}],
	"America/Indiana/Indianapolis": [{cities:['Indianapolis', 'South Bend', 'Bloomington', 'Lafayette', 'Terre Haute'], country:"United States"}],
	"America/Indiana/Vincennes": [{cities:['Jasper'], country:"United States"}],
	"America/Juneau": [{cities:['Juneau'], country:"United States"}],
	"America/Kentucky/Louisville": [{cities:['Louisville', 'New Albany', 'Pleasure Ridge Park', 'Clarksville', 'Fern Creek'], country:"United States"}],
	"America/Los_Angeles": [{cities:['Los Angeles', 'San Jose', 'Seattle', 'Las Vegas', 'Sacramento'], country:"United States"}],
	"America/New_York": [{cities:['New York City', 'Queens', 'Manhattan', 'Jacksonville', 'Charlotte'], country:"United States"}],
	"America/North_Dakota/New_Salem": [{cities:['Mandan'], country:"United States"}],
	"America/Phoenix": [{cities:['Phoenix', 'Mesa', 'Gilbert', 'Scottsdale', 'Peoria'], country:"United States"}],
	"Pacific/Honolulu": [{cities:['Honolulu', 'Pearl City', 'Kailua', 'Kaneohe', 'Kahului'], country:"United States"}],
	"America/Montevideo": [{cities:['Montevideo', 'Paysandu', 'Rivera', 'Tacuarembo', 'Mercedes'], country:"Uruguay"}],
	"Asia/Samarkand": [{cities:['Samarkand', 'Bukhara', 'Tirmiz', 'Urganch', 'Shahrisabz'], country:"Uzbekistan"}],
	"Asia/Tashkent": [{cities:['Tashkent', 'Andijon', "Qo'qon", 'Angren', 'Olmaliq'], country:"Uzbekistan"}],
	"Europe/Vatican": [{cities:['Vatican City'], country:"Holy See (Vatican City State)"}],
	"America/St_Vincent": [{cities:['Kingstown'], country:"Saint Vincent and the Grenadines"}],
	"America/Caracas": [{cities:['Caracas', 'Maracay', 'Barquisimeto', 'Barcelona', 'Ciudad Bolivar'], country:"Bolivarian Republic of Venezuela"}],
	"America/Tortola": [{cities:['Road Town'], country:"British Virgin Islands"}],
	"America/St_Thomas": [{cities:['Saint Croix'], country:"U.S. Virgin Islands"}],
	"Asia/Ho_Chi_Minh": [{cities:['Ho Chi Minh City', 'Bien Hoa', 'Thuan An', 'Vung Tau', 'Long Xuyen'], country:"Vietnam"}],
	"Pacific/Efate": [{cities:['Port-Vila'], country:"Vanuatu"}],
	"Pacific/Wallis": [{cities:['Mata-Utu'], country:"Wallis and Futuna"}],
	"Pacific/Apia": [{cities:['Apia'], country:"Samoa"}],
	"Asia/Aden": [{cities:['Sanaa', 'Al Hudaydah', 'Mukalla', 'Dhamar', 'Sayyan'], country:"Yemen"}],
	"Indian/Mayotte": [{cities:['Mamoudzou', 'Dzaoudzi'], country:"Mayotte"}],
	"Africa/Johannesburg": [{cities:['Johannesburg', 'Durban', 'Pretoria', 'Pietermaritzburg', 'Bloemfontein'], country:"South Africa"}],
	"Africa/Lusaka": [{cities:['Lusaka', 'Kitwe', 'Kabwe', 'Mufulira', 'Livingstone'], country:"Zambia"}],
	"Africa/Harare": [{cities:['Harare', 'Chitungwiza', 'Gweru', 'Kwekwe', 'Ruwa'], country:"Zimbabwe"}],
	"Etc/GMT+12": [{country: "Baker Island"}, {country: 'Howland Island'}],
	"Pacific/Gambier": [{cities:['Rikitea'], country:"French Polynesia"}],
	"Pacific/Marquesas": [{cities:["Taiohae", "Atuona"], country:"French Polynesia"}],
	"Pacific/Kiritimati": [{cities:["Napari Village", "London Village", "Tabwakea Village", "Banana Village"], country:"Kiribati"}]
}