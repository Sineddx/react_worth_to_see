const worthToSeeList = [
            {
                id: 1,
                country: "Polska",
                link: "https://www.kopalnia.pl/",
                name: "Kopalnia Soli(Wieliczka)",
                desc: "Kopalnia Soli w Wieliczce trafiła na pierwszą w historii listę światowego dziedzictwa UNESCO już w 1978 r. To jedyny obiekt górniczy na świecie, który jest czynny bez przerwy aż od średniowiecza, a historia tych złóż soli sięga aż 14 milionów lat. Z wydobycia soli w tzw. żupach krakowskich (czyli w kopalniach Wieliczka i Bochnia), Polska czerpała w szczytowym okresie aż... 20% swoich dochodów!",
                img: ["https://bartekwpodrozy.pl/wp-content/uploads/2021/12/P1280126.jpg", "https://bartekwpodrozy.pl/wp-content/uploads/2021/12/P1280017.jpg", "https://bartekwpodrozy.pl/wp-content/uploads/2021/12/P1280223.jpg"]
            },
            {
                id: 2,
                country: "Polska",
                link: "https://visitwroclaw.eu/miejsca/zwiedzanie-i-atrakcje",
                name: "Wrocław",
                desc: "Zwiedzanie Wrocławia może trwać długimi dniami (u mnie przedłużyło się nawet do 10 lat), ale w ramach krótkiego wypadu powinieneś zajrzeć na Rynek z potężnym Starym Ratuszem, a później zwiedzić Ostrów Tumski, Panoramę Racławicką i wpisaną na listę światowego dziedzictwa UNESCO Halę Stulecia projektu Maxa Berga. Jeśli w ramach weekendowego wypadu uda Ci się wyegzekwować trochę czasu, zainteresuj się też nietypowymi i mniej oczywistymi atrakcjami Wrocławia. Lista jest długa - sprawdź w artykule poniżej, które miejsca wydają Ci się najciekawsze. Ja nie odpuściłbym sobie kolejki linowej \"Polinka\", budynku Wydziału Architektury Politechniki Wrocławskiej przy Parku Tołpy, atrakcji przy ul. Podwale",
                img: ["https://bartekwpodrozy.pl/wp-content/uploads/2020/05/P1060209_1.jpg", "https://bartekwpodrozy.pl/wp-content/uploads/2021/02/P1050860_1.jpg"]
            },
            {
                id: 3,
                link: "https://forty.pl/",
                country: "Polska",
                name: "Twierdza Srebrna Góra",
                desc: "W poszukiwaniach ciekawych miejsc w Polsce na weekend nie wypada pominąć największej górskiej twierdzy Europy, która jest jedną z najważniejszych atrakcji Gór Sowich na Dolnym Śląsku. Twierdza Srebrna Góra pozostała niezdobyta i tylko raz doszło do jej oblężenia - podczas wojen napoleońskich. W skład twierdzy wchodzi 6 fortów i kilka bastionów, a jej wnętrza pomieściły ponad 300 pomieszczeń. W razie wojny twierdza Srebrna Góra miała być domem dla prawie 4000 żołnierzy, ale liczba ta w razie potrzeby mogła wzrosnąć nawet do 5000.",
                img : ["https://bartekwpodrozy.pl/wp-content/uploads/2021/03/G0015237-PS_wyr.jpg", "https://bartekwpodrozy.pl/wp-content/uploads/2021/03/YUN00246-2.jpg"]
            },
    {
        id: 4,
        link: "https://www.spain.info/pl/region/costa-brava/",
        country: "Hiszpania",
        name: "Costa Brava",
        desc: "Nazwa Costa Brava oznacza \"dzikie wybrzeże\" i częściowo oddaje charakter tego miejsca. Costa Brava ciągnie się wzdłuż północnego wybrzeża Morza Śródziemnego , od granicy francusko-hiszpańskiej i kończy nieopodal północno-wschodnich przedmieść Barcelony. Nazwa częściowo oddaje charakter tego miejsca - skaliste klify i sięgające daleko w morze półwyspy oddzielają szerokie, łukowate plaże, nad którymi wyrosły spore ośrodki turystyczne.",
        img: ["https://ocdn.eu/pulscms-transforms/1/Ov0k9kqTURBXy83Zjg0OGU5NTFmOGYxZGMwN2I3NTY0MTJiZDExZjJhNC5qcGVnlpUCzQMUAMLDlQIAzQL4wsOUBsz_zP_M_5QGzP_M_8z_lAbM_8z_zP-UBsz_zP_M_94AAaEwBQ", "https://www.eccoholiday.com/p/wp-content/uploads/2020/03/costa-brava-1.jpg"]
    },
    {
        id: 5,
        link: "https://www.barcelona.cat/en/",
        country: "Hiszpania",
        name: "Barcelona",
        desc: "Barcelona jest drugim co do wielkości miastem Hiszpanii, ale dla większości turystów stanowi zdecydowanie cel numer jeden w tym kraju. Niesamowity klimat, atmosfera gwaru i zabawy, tętniąca życiem praktycznie przez całą dobę jest miastem które trzeba zobaczyć koniecznie. Do tego dochodzą piękne zabytki starówki, wzgórze Montjuic, port i niesamowita architektura modernistyczna, na czele z monumentalną Sagrada Familia autorstwa genialnego Gaudiego.",
        img: ["https://ocdn.eu/pulscms-transforms/1/vMck9kqTURBXy9jYTNkZWM5NWFhMDJiNGI5YjVhOGU2N2NhMzUyZDAxOS5qcGVnlpUCzQMUAMLDlQIAzQL4wsOUBsz_zP_M_5QGzP_M_8z_lAbM_8z_zP-UBsz_zP_M_94AAaEwBQ", "https://aws-tiqets-cdn.imgix.net/images/content/918c110087d4476290360ecefc9cf7f4.jpg?auto=format&fit=crop&ixlib=python-3.2.1&q=70&s=63ce9814bfa92f3a40f18ba1aac52819" ]
    },
    {
        id: 6,
        link: "https://www.spain.info/pl/natura/park-narodowy-picos-europa/",
        country: "Hiszpania",
        name: "Picos de Europa",
        desc: "Położony między Kantabrią, Asturią oraz Kastylią i León masyw Picos de Europa to najwyższe pasmo Gór Kantabryjskich tworzące jeden z najpiękniejszych krajobrazów Hiszpanii, gdzie wśród ośnieżonych szczytów, zielonych pastwisk, głębokich kanionów i przepaści od czasu do czasu zobaczyć można niewielkie, wzniesione z kamienia osady ludzkie. W 1995 r. cały ten obszar został włączony do Parque Nacional Picos de Europa - jednego z największych terenów chronionych w Europie.",
        img: ["https://www.spain.info/export/sites/segtur/.content/imagenes/galeria-destacados/parques-nacionales/lago-ercina-covadonga-c-willian-justen-de-vasconcellos-u582103.jpg_1476000910.jpg", "https://www.spain.info/export/sites/segtur/.content/imagenes/galeria-destacados/parques-nacionales/vacas-picos-europa-c-hayden-walker-u-Q7iHfZI5wGo.jpg_1476000910.jpg"]
    },
    {
        id: 7,
        link: "https://www.prague.eu/cs",
        country: "Czechy",
        name: "Praga",
        desc: "Praga jest niewątpliwie atrakcją Republiki Czeskiej. Miasto słynie z niezliczonych placów zabytkowych i gigantycznego kompleksu zamkowego.Istnieje również wiele rzeczy do zrobienia w Pradze, które czynią go atrakcyjnym. Wizyta w Pradze jest koniecznością, ale nie zapominaj o innych miastach Republiki Czeskiej i miasteczkach.",
        img: ["https://btkarkonosze.com/wp-content/uploads/2019/06/ZLOTA-PRAGA-Z-REJSEM.jpeg", "https://www.itaka.pl/blog/wp-content/uploads/2019/11/rynek-starego-miasta-w-pradze-czechy-1920x1280.jpg"]
    },
    {
        id: 8,
        link: "https://www.visitczechrepublic.com/pl-PL/a6a9e42c-1e96-416d-bf14-e2eecd7704cd/place/t-carlsbad",
        country: "Czechy",
        name: "Karlowe Wary",
        desc: "Karlovy Vary są jednym z najbardziej znanych czeskich uzdrowisk. Karlove Vary odwiedzają zarówno turyści jak i pacjenci, którzy zaznają kąpieli w leczniczych wodach.",
        img: ["https://cdn.galleries.smcloud.net/t/galleries/gf-LyXb-54oq-CLEE_uzdrowisko-karlowe-wary-karlovy-vary-1920x1080-nocrop.jpg", "https://img.itinari.com/pages/images/original/50251694-b911-47cc-999a-bc81188c6b5e-istock-636436358.jpg?ch=DPR&dpr=2.625&w=1600&s=b731bfb806438ca16d20bd0cd8c574a3"]
    },
    {
      id: 9,
      link: "https://www.ckrumlov.info/en/cesky-krumlov/",
      country: "Czechy",
      name: "Cesky Krumlov",
      desc: "Cesky Krumlov jest jednym z klejnotów Czech położony w malowniczym krajobrazie w zakolu rzeki Wełtwy. Pamiętaj, aby wspiąć się na wieżę renesansową z niesamowitymi widokami na okolicę, podjąć zwiedzanie kompleksu zamkowego i odwiedzenia sklepów i restauracji w mieście. Cesky Krumlov pochodzi z 14 wieku, jest to jedno z  najładniejszych miejsc w Czechach (wpisane na Listę Światowego Dziedzictwa UNESCO.)",
      img: ["https://www.visitczechrepublic.com/cms/getmedia/c6d85339-6fc9-4ef8-bb95-282cf150112b/shutterstock_257859392.jpg?width=768", "https://images.musement.com/cover/0081/83/cesky-krumlov_header-8082349.jpeg?w=1200&h=630&q=95&fit=crop"]

    },
    {
        id: 10,
        link: "https://www.miniatur-wunderland.de/",
        country: "Niemcy",
        name: "Miniatur Wunderland Hamburg",
        desc:"Miniatur Wunderland w hamburskiej dzielnicy Speicherstadt to wyjątkowe miejsce. Największa na świecie kolejka miniaturowa zabiera swoich gości w podróż po krajach i kontynentach, jadąc przez wiernie odtworzone krajobrazy i światy stworzone przez fantazję.\n" +
            "\n" +
            "Miniatur Wunderland w Hamburgu prezentuje wiele dużych i małych historii, na każdym kroku można coś odkryć – z Hamburga z jego słynnym portem jest zaledwie kilka kroków do Wielkiego Kanionu, przez który ogromnym drewnianym mostem przejeżdża amerykański ekspres. Odcinek amerykański porywa zwiedzających w objazdową podróż po Stanach Zjednoczonych, od Parku Narodowego Everglades, przez miasto hazardu Las Vegas, po Góry Skaliste. Stamtąd droga wiedzie dalej do Skandynawii, ojczyzny Pipi Langstrumpf i trolli jaskiniowych, gdzie po autentycznym zbiorniku wodnym o pojemności 30 000 litrów wody kursują frachtowce i statki wycieczkowe.",
        img: ["https://geheimtipphamburg.de/content/uploads/2021/05/geheimtipp-hamburg-stadt-leute-lieblingsplaetze-speicherstadt-miniaturwunderland-dahlina-sophie-kock-5.jpg", "https://www.funk-gruppe.de/fileadmin/_processed_/4/4/csm_Versicherungsmanagement_Miniaturwunderland_Roedingsmarkt_mobil_0c86adbda2.jpg"]
    },
    {
        id: 11,
        link: "https://www.europapark.de/en/park",
        country: "Niemcy",
        name: "Europa-Park w Rust",
        desc: "Jakość rozrywki pierwsza klasa – kto się tutaj pojawia, oczekuje przede wszystkim jednego – doskonałej zabawy! W Europa-Park na ok. 95 hektarach czekają ekscytujące przeżycia. Ten olbrzymi obiekt spełni niemal każde marzenie i od lat należy do cieszących się największą popularnością parków rozrywki dla rodzin. Połączenie wystrzałowego lunaparku, ciekawych stref tematycznych, przepięknych parków i do tego ponad dziesięć fantastycznych widowisk ze wspaniałym programem, na przykład teatr dla dzieci, rewia na lodzie i teatr rozmaitości – ta miejscowość wypoczynkowa zadowoli niemal każdego, spełniając różne zachcianki związane z rozrywką i zabawą. Już na wejściu gości wita wielka postać maskotki parku – euromysz.",
        img: ["https://polskiobserwator.de/wp-content/uploads/2019/09/europa-park.jpg", "https://www.kayak.pl/rimg/himg/b4/52/e6/expediav2-244550-116909823-522924.jpg?width=1366&height=768&crop=true"]

    },
    {
        id: 12,
        link: "https://www.neuschwanstein.de/englisch/tourist/",
        country: "Niemcy",
        name: "zamek Neuschwanstein",
        desc: "Zamek Neuschwanstein znany jest na całym świecie jako symbol wyidealizowanej romantycznej architektury i tragicznej historii jego właściciela. Po utracie suwerenności we własnym królestwie, Ludwig II wycofał się do własnego świata mitów, legend i baśni.\n" +
            "\n" +
            " \n" +
            "\n" +
            "Zamek Neuschwanstein, położony w Alpach w południowej części Bawarii, to jeden z najsłynniejszych i najczęściej fotografowanych zabytków w Niemczech. Odwiedza go ok. 1,5 mln turystów rocznie. Został zbudowany w 1869 r. na polecenie bawarskiego króla Ludwika II na stromych skalnych ścianach nad przełomem rzeki Pöllat.",
        img: ["https://ktobyl.pl/wp-content/uploads/2021/02/neuschwanstein.jpg", "https://www.podrozepoeuropie.pl/system/gallery/images/images/000/008/311/large/schloss-neuschwanstein.jpg?1527854029"]
    },
    {
        id: 13,
        link: "https://www.normandie-tourisme.fr/",
        country: "Francja",
        name: "Normandia",
        desc: "Normandia słynie z wielu pięknych miejsc. Takie absolutne must see to Étretat z dramatycznymi, pięknie ukształtowanymi klifami kredowymi, Mont Saint-Michel ze swoim klasztorem wzniesionym na wyspie pływowej i historyczne plaże, które były miejscem Lądowania w Normandii. Warto zajrzeć jeszcze do Rouen, które może się poszczycić klimatycznymi uliczkami i przepiękną katedrą Notre-Dame, do Giverny, gdzie mieszkał Claude Monet i tutejsze ogrody stanowiły inspirację dla jego impresji, czy np. do le Havre z modernistyczną architekturą projektu Auguste’a Perreta. Z własnego doświadczenia polecam również przejażdżkę wzdłuż wybrzeża, bo piękne klify kredowe znajdziecie również np. w Criel-sur-Mer czy w Saint-Valery-en-Caux.",
        img: ["https://dobrze-podrozowac.pl/wp-content/uploads/2018/11/Normandia-Francja-klify-Etretat.jpg", "https://dobrze-podrozowac.pl/wp-content/uploads/2018/11/Francja-Normandia-wybrze%C5%BCe-klifowe-1.jpg"]
    },
    {
        id: 14,
        link: "https://en.parisinfo.com/",
        country: "Francja",
        name: "Paryż",
        desc: "Paryż - każdy powinien odwiedzić to miasto. Obejrzeć największe zabytki, powłóczyć się po krętych uliczkach, wjechać na szczyt Wieży Eiffla, zasiąść w kafejce na Montmartre. Jednych miasto oczarowuje, inni twierdzą, że jest przereklamowane. Z pewnością warto jednak tu przyjechać i wyrobić sobie własne zdanie. Nie ma wątpliwości, że to wyjątkowe miasto - stolica Francji, ale w pewnym sensie także stolica świata. W Paryżu spotykają się bowiem turyści ze wszystkich zakątków kuli ziemskiej. Można tu obejrzeć dzieła artystów różnej narodowości, zjeść dania każdej kuchni i zrobić zakupy w sklepach wszystkich znanych marek.",
        img: ["https://dcontent.inviacdn.net/shared/img/web-830/2020/6/12/m0/966731.jpg", "https://santaklara.pl/wp-content/uploads/2022/10/paris-2.webp"]
    },
    {
        id: 15,
        link: "https://ville-eze.fr/",
        country: "Francja",
        name: "Eze",
        desc: "Eze, wisząca na nadbrzeżnej skale średniowieczna warowna wioska, nazywana \"orlim gniazdem\", jest jednym z najpiękniejszych miejsc na Lazurowym Wybrzeżu. Piękne, brukowane ulice, ogrody, z których rozciągają się widoki na zatokę oraz majestatyczne ruiny zamku, sprawiają, że wizyta w Eze jest sporym doznaniem estetycznym. Miejscowością zachwycał się słynny niemiecki filozof Friedrich Nietzsche. Na pamiątkę jego pobytu ścieżkę łączącą Eze-Village z niżej położonym Eze-sur-Mer, którą często chadzał, nazwano Chemin Frédéric Nietzsche. Warto się przejść uliczkami wewnątrz zamkowych murów, a z ich szczytu spojrzeć na w bezkresne morze - przy dobrej pogodzie widać też Saint-Tropez i Korsykę. Całkowicie odrestaurowane Eze utrzymuje się głównie z turystyki oraz ze sprzedaży wyrobów rzemieślniczych.",
        img: ["https://lazurowyprzewodnik.pl/wp-content/uploads/2015/01/Eze3.jpg", "https://lazurowyprzewodnik.pl/wp-content/uploads/2015/01/Eze1.jpeg", "https://ktobyl.pl/wp-content/uploads/2021/05/eze1.jpg"]
    },
    {
        id: 16,
        link: "https://visitdubrovnik.hr/pl/",
        country: "Chorwacja",
        name: "Dubrownik",
        desc:"Prawdopodobnie najsłynniejsze chorwackie miasto odwiedzane corocznie przez miliony turystów, które zachwyca swoją niesamowitą historią. Dzięki charakterystycznej architekturze oraz ilości oferowanych atrakcji, łatwo można zapomnieć o ostrzale miasta podczas wojny domowej w latach 90. XX wieku. Sposobów na poznanie Dubrownika i spędzenie tam wolnego czasu jest wiele, a wybór należy tylko od nas, w zależności od tego, jaka forma zwiedzania jest dla nas najatrakcyjniejsza. Od spaceru po murach obronnych, przez rejs wokół starego miasta oraz pobliskich wysepek, aż po wjazd kolejką liniową na wzgórze Srd, z którego rozpościera się jeden z najpiękniejszych widoków. Warto jednak również zapuścić się w gąszcz zabytkowych uliczek, pośród których toczy się życie mieszkańców miasta. Często można natknąć się na malutkie ogrody czy suszące się pranie, co nadaje majestatycznemu Dubrownikowi odrobinę swojskości",
        img: ["https://ocdn.eu/pulscms-transforms/1/5Bkk9kpTURBXy82ZjQzNzI3YTFiZDYyZmJkZmZlZWIyMTNiODY2NmEwYy5qcGeTlQPNBSQAzRXIzQxBkwmmMWViZTExBpMFzQSwzQJ23gABoTAB/dubrownik-to-jedna-z-wizytowek-chorwacji.jpg", "https://media.zielonamapa.pl/images/europa/chorwacja/dubrownik/dubrownik-1.jpg", "https://bi.im-g.pl/im/ed/ed/12/z19847405AMP,Dubrownik--Chorwacja.jpg"]
    },
    {
        id: 17,
        link: "https://np-plitvicka-jezera.hr/en/",
        country: "Chorwacja",
        name: "Park N. Jezior Plitwickich",
        desc:"Ponownie niezwykle popularne miejsce, które z kolei zachwyca swoją niezwykłą, nieskalaną ludzką ręką przyrodą. Kompleks jezior, który od 1979 roku znajduje się na liście Światowego Dziedzictwa Kulturalnego i Przyrodniczego UNESCO, położony w środkowej części kraju, oczaruje każdego miłośnika natury swoją florą i fauną oraz zachęci do dalszego odkrywania uroków Chorwacji.",
        img: ["https://images.r.pl/zdjecia/lokalizacje/24/chorwacja_24_109267_165954_1000x1000.jpg", "https://ocdn.eu/pulscms-transforms/1/tkXk9kpTURBXy8xN2E3NjgwN2Q0MTRiNWQxMmFiMzg5ZmVmMTZmZjJkYi5qcGeTlQMAzKLNFFvNC3OTCaZhNDgwYTIGkwXNBLDNAnbeAAGhMAE/park-narodowy-jezior-plitwickich.jpg" ]
    },
    {
        id: 18,
        link: "https://www.hvarinfo.com/pl/",
        country: "Chorwacja",
        name: "Wyspa Hvar",
        desc:"Skoro do Chorwacji należy ponad 1200 wysp i wysepek, nie sposób nie odwiedzić przynajmniej jednej z nich, a najlepiej tej najsłynniejszej. Hvar zachwyca unoszącym się zapachem lawendy oraz pięknymi plażami. Zwiedzanie wyspy warto rozpocząć od stolicy miasta, która słynie z placu świętego Szczepana, stanowiącego centralny punkt miasta oraz Forticy, z której rozpościera się widok na pobliskie wyspy Piekielne. Hvar przyciągnie także miłośników nocnego życia, ponieważ to kolejny element, z którego słynie te miejsce. Jednak osoby ceniące sobie spokój oraz ciszę z pewnością znajdą także swój azyl w pobliskich miejscowościach - Starym Gradzie, Jelsie czy Vrboskiej, uroczych miasteczkach, w których można zaobserwować typowo dalmatyńskie niespieszne życie.",
        img: ["https://images.r.pl/zdjecia/lokalizacje/24/chorwacja_24_147405_352477_1000x1000.jpg", "https://dalmacja.pl/wp-content/uploads/2022/06/chorwacja-wyspa-hvar-bol-panoramiczny-widok-z-lotu-ptaka-na-_shutterstock_1444482428.jpg"]
    }

        ]


export {worthToSeeList}