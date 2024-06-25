import { mapDataPoint, timelineDataPoint } from "./data";
import newroz1 from "/images/20240323-ba-newroz-012.jpg";
import zeitungkurdistan from "/images/Kurdistan_newspaper_1898.jpeg";
import mahbadflag from "/images/Flag_of_the_Republic_of_Mahabad.svg";
import { dOttoman } from "./dOttoman";
import { dOrigin } from "./dOrigin";
import { dWorldWarToday } from "./dWorldWarToday";
import { dToday } from "./dToday";
import { dEmpires } from "./dEmpires";
import { dFuerstentuemer } from "./dFuerstetuemer";
import { dDemography } from "./dDemography";
import { dLinguistics } from "./dLinguistics";

const topics: topic[] = [
  {
    id: 0,
    title: "Gebiete & Grenzen",
    chapters: [
      {
        title: "Ursprünge",
        content: [
          {
            title: "Fruchtbarer Halbmond",
            content: `Die ältesten bisher gefundenen und nachgewiesenen festen menschlichen Siedlungen liegen in Nordkurdistan. Im sogenannten "Fruchtbaren Halbmond" enstanden die ersten festen menschlichen Strukturen`,
            type: "text",
          },
          {
            title: "Ursprungsgebiete",
            content: `Es gibt verschiedene Theorien über die Abstammung der Kurd*innen. Eine der vielversprechendsten Theorien besagt, dass die  Kurd*innen von Stämmen des nördlichen und mittleren Zagros-Gebirges (u.a. Guti, Lulubi) und des Osttaurusgebirges (Hurriter) abstammen. Diese Stämme waren sich sehr nah und sind höchstwahrscheinlich die Vorfahren der Mitanni, Kassiten, Nairi, Uratäer und Meder, welche wiederum mit den heutigen Kurd*innen in Verbindung gebracht werden können, da sich viele kurdische Lieder und Erzählungen auf sie beziehen. Außerdem sind bei den Kurd*innen Stammesstrukuren immer noch stark ausgeprägt, wie sie schon bei den Gutäern und Lullubäern bestanden. Die Kurd*innen sind außerdem geprägt durch verschiedenste andere Völker und Gruppierungen, die im Laufe der Jahrhunderte in Kurdistan lebten oder Kurdistan durchquerten.`,
            type: "text",
          },
          {
            type: "quote",
            content: `Vor allem bis zum ersten Weltkrieg (bis sie nämlich vertrieben wurden) lebten auch viele verschiedene Kulturen in Kurdistan. Daher können wir die KurdInnen auch als die Erben vieler im Laufe der Geschichte vorgekommenen Kulturen verstehen.`,
            title: "Ercan Ayboga - Chronologie der kurdischen Geschichte",
          },
          {
            content: `Die Abstammung der Kurd*innen lässt sich also nicht auf einzelnes Volk oder einen einzelnen Stamm zurückführen. Die Kurd*innen sind vielmehr das Produkt verschiedener indigener Gruppen der Region und vielen anderen externen Einflüssen.`,
            type: "text",
          },
          {
            content: `2000 v.u.Z. werden von den Sumerern die “Karda” und die “Qurti” erwähnt, die aus dem Zagros-Gebirge stammen. Im Sumerischen und später auch in der akkadischen Sprache stand KUR für Berg oder Bergland, KUR-KUR für Gebirge.`,
            type: "text",
          },
          {
            title: "Frühe Zusammenschlüsse",
            content: `Die Kurd*innen und ihre Vorfahren waren im Laufe der Geschichte oft Zeugen und Betroffener sich ständig verändernder Machtverhältnisse und dem Aufstieg und Fall verschiedener Reiche, Dynastien und Hochkulturen. Durch ihre Heimat in den Bergen konnten sie aber auch oft ihre relative Unabhängigkeit bewahren oder dienten als Puffer zwischen Großmächten. Ab 900 v.u.Z. entstand um den Wan-See im heutigen Nordkurdistan und im heutigen Ostkurdistan der Staat Urartu als Reaktion auf die Ständige Bedrohung durch die Assyrer. An seinem Höhepunkt spannte der Staat vom Urmia-See im Osten bis zu den heutigen Städten Erzingan und Malatya.`,
            type: "text",
          },
          {
            content: `Die Urartäer sind verglichen zu anderen Völkern und Staaten dieser Zeit sehr gut dokumentiert. Es lassen sich sowohl bei den Assyrern und Babyloniern Quellen zu ihnen finden. Neben den Kurd*innen gibt es auch viele Armenier*innen, die die These vertreten, dass ihre Kultur von den Urartäern abstammt, da viele spätere Siedlungsgebiete der Armenier*innen sich mit dem Land Urartu decken.`,
            type: "text",
          },
          {
            content: `Der Zusammenschluss verschiedener Stämme und Völker aus den Gebirgen fand immer wieder statt, vor allem um sich vor Angriffen der Assyrer zu schützen. Eines dieser Zusammenschlüsse war um 900 v.u.Z. die Meder. Die Konföderation der Meder war kein Königreich oder Zentralstaat, da die Geografie und auch die Prägung der Menschen in Stammesstrukturen das nicht zuließen. Ihr Land wurde Medien (persisch: Mâd, babylonisch: Umman-Mand, kurdisch: Medi / Medya) genannt. Es erstreckte sich im Osten bis zum heutigen Teheran. Erst 715 v.u.Z. vereinigten sich die Meder unter einem König, Kyaxares I. zu einer militärischen Einheit.`,
            type: "text",
          },
          {
            title: "Das Mederreich",
            type: "text",
            content:
              "Unter Kyaxsares II. und in Zusammenarbeit mit den Babylonier*innen besiegen die Meder 612 v.u.Z. das Assyrische Reich und zerschlagen es damit endgültig. Aus diesem Sieg entstand das die Geschichte um das Neujahrsfest Newroz, das von Kurden, Persern und anderen iranischen Völkern am 21. März gefeiert wird. Laut Überlieferung symbolisiert Newroz den Aufstand von Kurd*innen und anderer Völker gegen die Tyrannenherrschaft des Dehak und dessen Zerschlagung unter der Führung des Schmieds Kawa.",
          },
          {
            content: newroz1,
            type: "image",
            title: "Newrozfest 2024 in Frankfurt",
          },
          {
            type: "text",
            content: `Anschließend an den Sieg über die Assyrer gründeten die Meder das Reich Medien. Wichtig für die kulturelle und sprachliche Einheit der Meder war die Eingliederung der im Osttaurus- und Zagros-Gebirge ansässigen Völker. Auf die Kultur der Meder beziehen sich Kurd*innen heute immer noch in Liedern und Erzählungen.`,
          },
          {
            type: "text",
            content: `Um 550 v.u.Z. erstarkten die Perser aus dem heutigen Südiran und erobern unter Kyros II. das Mederreich. Nach Überlieferungen ist das Überlaufen des medischen Kommandanten Harpagos der Grund für die Niederlage der Meder.`,
          },
          {
            type: "quote",
            content: `Dieser [Verrat] steht symbolisch für all die später durch die ganze kurdische Geschichte stattfindenden Verrate und Kollaborationen mit den Besatzern Kurdistans.`,
            title: "Ercan Ayboga - Chronologie der kurdischen Geschichte",
          },
          {
            type: "text",
            content: `401 v.u.Z. berichtet Xenophon, ein griechischer Kommandant und Abenteurer, dass seine Armee beim Durchmarsch durch das heutige Nord-Kurdistan von den “Karduchoi” (Karduchen) angegriffen wurden. Die Berichte des Xenophon sind eine wichtige Quelle für die kurdische Geschichtsforschung. Der Bericht lässt schließen, dass es zu dieser Zeit eine Staatswesen im nördlichen Mesopotamien, also Nord-Kurdistan gab, das oberflächlich zum Persischen Reich gehörte. Dieses Staatswesen hat viele verschiedene Namen, die wahrscheinlich durch verschiedene Übersetzungen des gleichen Begriffes entstanden: Corduene, Cordyene, Cardyene, Gordyaea, Korduene, Korchayk und Giridyan. Der römisch Historiker Strabon verwendet die Bezeichnung Gordyene für die Berge zwischen Amed und Mush und erwähnt den Begriff “Kyrtii”.`,
          },
        ],
        interactionData: dOrigin,
        interactionType: "filter",
      },
      {
        title: "Beherrscht",
        interactionData: dEmpires,
        interactionType: "timeline",
        content: [
          {
            type: "quote",
            content: `Mit der Niederwerfung des Medischen Staates durch die Perser begann für die Kurden von nun an eine ständige bis heute andauernde Phase der Okkupation, Ausplünderung und der Kriege.`,
            title: "Ercan Ayboga - Chronologie der kurdischen Geschichte",
          },
          {
            title: "Ständig wechselnde Herrscher",
            content: `Durch den Sieg Alexander des Großen 331 v.u.Z. über das Persische Reich fällt Kurdistan unter hellenische (griechische) Herrschaft. Nach dem Tod Alexanders 323 v.u.Z. gerät Kurdistan unter die Herrschaft der Seleukiden und wird dann Teil des sich ab 235 v.u.Z. ausbreitenden Partherreich.`,
            type: "text",
          },
          {
            content: `Das Partherreich war ein Feudalstaat, dessen Zentralregierung nur schwach ausgeprägt war. Das Fürstentum Atropatene Media zeigt, dass Meiden auch nach dem Perserreich relevant war. Unter Partherkönig Mithridates II. wird 115 v.u.Z. die Seidenstraße eröffnet.`,
            type: "text",
          },
          {
            content: `190-55 v.u.Z war Nord- und Mittel-Kurdistan unter der Herrschaft des Königreichs Armenien, welches aber ab 55 v.u.Z. wieder von den Parthern kontrolliert wurde. Bis zum Genozid an den Armeniern 1915 lebten die Kurden und Armenier die nächsten zwei Jahrtausende weitgehend friedlich neben- und miteinander. Viele Provinzen im heutigen Nord-Kurdistan wurden ca. zur Hälfte von Armeniern bewohnt. In den gemischten Gebieten tendierten die Armenier*innen immer mehr zum Handewerk und Handel, die Kurd*innen eher zur Landwirtschaft.`,
            type: "text",
          },
          {
            title: "Römer",
            content: `Ab dem 1. Jh. v.u.Z. breitet sich das römische Reich um das östliche Mittelmeer aus. Parther und Rom werden Rivalen, vor allem auf Grund vieler Angriffe der Römer. Kurdistan, Mittel-Süd-Mesopotamien und Armenien werden immer wieder Kriegsschauplatz. 20 v.u.Z. wird unter dem römischen Kaiser Augustus der Euphrat als Grenze anerkannt.`,
            type: "text",
          },
          {
            content: `163 v.u.Z. bis 74 n.u.Z. bildet sich am Euphrat in der heutigen Provinz Adiyaman das Kommagene Reich aus. Die Hauptstadt Samsat ist heute unter den Wassermassen des Atatürk-Stausees begraben. Dieser Staat war ein Pufferstaat unter römischen Einfluss. Nach und nach wurde er auch in das Römische Reich eingegliedert. Kommagene lag im heutigen Kurdistan, weshalb es Thesen über eine Verwandtschaft mit den Kurd*innen gibt.`,
            type: "text",
          },
          {
            content: `Nach dem Sieg 224 n.u.Z. einer persischen Revolte unter Ardaschir I. über den letzten parthischen König geht das Parthische Reich in das Neupersische Reich auf, das bis zur islamischen Expansion im 7.Jh. besteht. Auch das Neupersische Reich kämpft von 3. bis ins 7. Jh. mit den Römern und später Ostrom, bzw. Byzanz über Vorherrschaft in der Region. Die Konflikte finden wieder oft in den kurdischen Siedlungsgebieten statt.`,
            type: "text",
          },
          {
            title: "Islamische Expansion",
            content: `630 erobert Mohammed Mekka und damit beginnen die Eroberungszüge auf der arabischen Halbinsel. 632 stirbt Mohammed, bis dahin ist die südliche und mittlere arabische Halbinsel schon erobert. Da das Oströmische Reich und das Neupersische Reich bis 629 einen langen Krieg geführt hatten und stark geschwächt waren war der arabisch-islamische Eroberungszug begünstigt. Außerdem waren für den Erfolg des Islams wesentlich mildere Besteuerung und anfänglich relativ große Toleranz für religiöse Minderheiten ausschlaggebend.`,
            type: "text",
          },
          {
            content: `Ab 637 sind auch die Kurd*innen von der Expansion betroffen und werden nach und nach, auch unter Zwang, erobert und islamisiert. Bis weit ins 10. Jh. wehrt sich die kurdische Bevölkerung gegen die die gewaltsame Islamisierung und es gibt immer wieder Aufstände gegen die islamische Zentralregierung in Damaskus. Vor allem die bergigen Gebiete im Norden Kurdistans leisten lange Widerstand, was dazu beiträgt, dass das mittlere und östliche Taurus-Gebirge für einige Jahrhunderte eine Barriere für die Ausbreitung des Islams darstellt.`,
            type: "text",
          },
          {
            content: `Der wahrscheinlich erste schriftlich überlieferte Nachweis kurdischer Literatur ist ein Text über die Auswirkungen der arabisch-islamischen Eroberung auf die Kurd*innen:`,
            type: "text",
          },
          {
            content: `Die grausamen Araber zerstörten die Dörfer der Arbeitenden bis zum Scharizur. Die Frauen und die Mädchen sind gefangengenommen. Die tapferen Männer wälzen sich im Blut. Die Riten des Zarathustra blieben verlassen...`,
            type: "quote",
          },
          {
            content: `In diesem Dokument das erste mal in der Geschichte der Begriff der Kurden nachweislich verwendet.`,
            type: "text",
          },
        ],
      },
      {
        title: "Kurdische Fürstentümer",
        interactionData: dFuerstentuemer,
        interactionType: "filter",
        small: true,
        content: [
          {
            title: "Dynastien im Islamischen Reich",
            content: `Im 8. und 9. Jh. entwickelt sich die Staatsform des Islamischen Reichs in eine feudalistische Richtung, die staatsabhängige, herrschende Großgrundbesitzer und Aristokraten schufen, welche mitunter auch anderen Völkern angehörten`,
            type: "text",
          },
          {
            content: `Ab dem 10. Jh., einhergehend mit der schrumpfenden Kontrolle der Araber über Kurdistan gab es Bestrebungen regionaler kurdischer Machthaber und Großgrundbesitzer, sich von der Zentralregierung unabhängig zu machen. So entstanden mehrere kurdische Fürstentümer mit weit reichender Autonomie.`,
            type: "text",
          },
          {
            content: `Dieses Aufblühen des Feudalismus in Kurdistan führte zur Bildung von handwerklichen Zentren und Handelsstädten und anderen Fortschritten, aber nie zu einer wirklichen Unabhängigkeit oder einem zentralen kurdischen Staat, da die Fürstentümer nicht untereinander zusammenkamen und außerdem ab dem 11. Jh. immer mehr türkische und mongolische Einfälle und Zerstörungen die Fortschritte abbrachen.`,
            type: "text",
          },
          {
            title: "Die Seldschuken und Mongolen",
            content: `Ende des 10. Jh. nehmen die Seldschuken, ein Zweig des aus dem heutigen Usbekistan, Kasachstan und Turkmenistan eingewanderten türkischen Stammes der Oghusen, den Islam an und nehmen nach und nach die Herrschaftsgebiete der Perser ein. Das Reich der Großseldschuken besiegt 1071 in Kurdistan das Byzantinische Reich und ermöglichte die türkische Eroberung Anatoliens. Die Kurden kämpften auf Seite der Seldschuken, da sie sich die Befreiung von den Byzantinern erhofften und den Seldschuken als Moslems näher standen. Das Großseldschukische Reich zerfällt relativ schnell an seiner Größe, der geringen Zahl von Türken, bzw. Seldschuken gegenüber der restlichen Bevölkerung und letztendlich auch den Kreuzzügen und wird aufgeteilt in Horassan, Irak und Iran.`,
            type: "text",
          },
          {
            content: `Die Überfälle der Mongolen im 13. Jh. zerstört viele kurdische kulturelle und historische Hinterlassenschaften und führt dazu, dass die türkischen Stämme vollständig nach Anatolien ziehen und dort in einigen Gebieten die Majorität bilden.`,
            type: "text",
          },
        ],
      },
      {
        title: "Osmanisches Reich",
        interactionData: dOttoman,
        interactionType: "timeline",
        content: [
          {
            type: "text",
            content: `Ende des 13. Jh. gründet sich um die Stadt Bursa in Nordwestanatolien das Osmanische Fürstentum unter Osman, zuerst unter Herrschaft der Seldschuken. Um 1299 erklärt Osman die Unabhängigkeit und gründet so den Osmanischen Staat. Der Osmanische Staat dehnt sich schnell aus und ab 1361 werden auch europäische Gebiete erobert.`,
          },
          {
            type: "text",
            content: `Ab 1512 fängt das Osmanische Reich an, sich nach Osten zu erweitern. So wird Kurdistan wieder Schauplatz von Machtkämpfen zweier Großmächte, dieses mal zwischen dem Osmanischen Reich und dem Reich der neuen persischen Dynastie der Safawiden. Ursprünglich stehen die Kurd*innen den Safawiden nahe, es steht von Seiten der Safawiden jedoch keine Autonomie in Aussicht, die Kurden werden sogar verfolgt. Die Osmanen auf der anderen Seite versprechen den sunnitischen kurdischen Besitzenden Fürstentümer, in denen sie keine Steuern zahlen oder Soldaten für die Zentralregierung stellen müssen. So wird der Großteil Kurdistan ins Osmanische Reich eingegliedert. Während des Krieges werden 40.000 Alewiten, zumeist Kurden, systematisch getötet um Kollaboration mit den Safawiden zu verhindern.`,
          },
          {
            type: "text",
            content: `In einem Vertrag vom 9.8.1515 wird den sunnitischen Kurden ihre volle Autonomie zugesichert, solange sie im Kriegsfalle Soldaten bereitstellen und eine kleine Steuer abrichten. Da die Seidenstraße auch durch Kurdistan verläuft trägt dieser Zustand zur wirtschaftlichen Entwicklung dieser Gebiete bei und führt zu einer bisher nie dagewesenen Blüte der kurdischen Kultur. Das mächtigste kurdische Fürstentum im Osmanischen Reich war Botan. Botan war das kulturelle Zentrum von Kurmanci-Literatur, während die südlicheren Fürstentümer Soran und Baban die Sorani-Literatur förderten.`,
          },
          {
            type: "text",
            content: `1639 wird das Kasr-i Schirin-Abkommen (Vertrag von Zuhab) geschlossen und so die Grenze zwischen Osmanischem Reich und Safawidischen Reich quer durch Kurdistan festgelegt. Damit wird der gemeinsame dynamische Entwicklung der Gesellschaften in Ost- und West-Kurdistan ein Riegel vorgeschoben.`,
          },
          {
            title: "Kurdische Nationalbewegung",
            type: "text",
            content: `Der Dichter und Schriftsteller Ehmedê Xanê verfasst im 1695 das wichtige kurdische Epos "Mem û Zîn" und behandelt darin die Verhältnisse der kurdischen Gesellschaftsordnung. Damit ist er einer der ersten, die sich für Kurden als Volk einsetzen. Bis dahin wurde sich vor allem über Region und Religion definiert. Der revolutionäre Volksdichter Xanî Khoyî ruft im 19. Jh. in seinen Werken zur Rebellion sowohl gegen Fremdherrscher als auch gegen die geistliche und weltliche Obrigkeit der kurdischen Feudalherren und droht mit der "Macht des Volkes".`,
          },
          {
            type: "text",
            content: `In der ersten Hälfte des 19. Jh. fällt das Osmanische Reich im Vergleich zu westlicheren Staaten technisch und wirtschaftlich zurück. Außerdem finden im westen des Reichs, im Balkan, nationale Befreiungsbewegungen Anklang. Das Osmanische Reich fokussiert sich also mehr auf seine östlichen Teile und schränkt die Autonomie der kurdischen Fürstentümer immer weiter ein. Außerdem werden mehr Steuern erhoben und die Kurden dazu verpflichtet, mehr Soldaten an die Zentralregierung zu stellen. Es kommt zu vielen Aufständen der Kurden unter der Führung der Fürsten, aber vorerst nicht wegen eines gemeinsamen Nationalverständnisses. Die Fürsten haben vielmehr Angst, ihre Privilegien zu verlieren. Erst in späteren Aufständen zum Ende des 19. Jh. bildet sich ein Nationalgefühl aus, welches aber immer noch sehr schwach ist. Die festen Stammesstrukturen der Kurden und ihre jeweiligen Anführer erschweren generell das Bilden einer politischen Einheit. In manchen durch Aufstände befreite Gebiete herrschen teilweise relativ fortschrittliche Zustände: 1843 bringt beispielsweise Bedirxan, Herrscher von Botan, die meisten kurdischen Fürsten unter seine Führung und befreit große Teile Kurdistans. In dieser Region dürfen sich Religionen frei entfalten und alle Völker sind den Kurden gleichgesetzt.`,
          },
          {
            type: "text",
            content: `Gleichzeitig führten die Aufstände und die allgemeine Schwächung des Osmanischen Reiches dazu, dass das Britische Imperium immer mehr Kontrolle über die Region bekam, mitunter mit dem Ziel, die Ölreserven in Mesopotamien unter die eigene Kontrolle zu bringen.`,
          },
          {
            title: "Assimilation",
            type: "text",
            content: `Unter Sultan Abdulhamit II. endet die Phase der Aufstände und es beginnt die Eingliederung der Kurden und ihrer Anführer in das Osmanische Reich. Die herrschende kurdische Klasse und Stammeseliten werden an die Eliten des Osmanischen Reiches angegliedert und viele ihrer Kinder  werden nach Istanbul zur Ausbildung geschickt.`,
          },
          {
            type: "text",
            content: `Um die Jahrhundertwende bringen viele Kinder der kurdischen Aristokratie, die in Istanbul oder in Europa studiert hatten, moderne politische Ideen nach Kurdistan und es bildet sich ein neuer kurdischer Nationalgedanke. Es werden erste kurdische Organisationen und Zeitungen gegründet:`,
          },
          {
            type: "image",
            content: zeitungkurdistan,
            title: `Die erste kurdische Zeitung "Kurdistan" wurde in Kairo in Kurmanci und osmanischer Sprache herausgegeben, aber im osmansichen Reich schnell verboten`,
          },
          {
            type: "text",
            content: `Nach der Jungtürkischen Revolution 1908 gibt es viele Modernisierungsbestrebungen im Osmanischen Reich. Neben dem einrichten einer parlamentarisch-konstitutionellen Regierung ist auch das Anerkennen und Einbinden verschiedener christlicher und nichttürkischer islamischer Minderheiten und auch das Einbinden von Autonomiebestrebungen dieser Völker in einen Vielvölkerstaat der Osmanen das Ziel.`,
          },
          {
            type: "text",
            content: `Dies führt dazu, dass viele kurdische Organisationen und Parteien aus dem Untergrund treten und offen und klar kurdische Interessen politisch vertreten. In Istanbul wird die erste kurdische Schule gegründet und in kurdischen Städten werden die sog. “Kürt Kulüpleri” (kurdische Clubs) gegründet, die sich aus Intellektuellen und Aktivisten zusammensetzen. Währenddessen gibt es aber auch noch viele konservative kurdische Stammesführer, die dem entmachteten Sultan und dem gemeinsamen Islamischen Banner treu sind.`,
          },
        ],
      },
      {
        title: "Erster Weltkrieg bis heute",
        interactionData: dWorldWarToday,
        interactionType: "timeline",
        content: [
          {
            type: "text",
            content: `In Folge des Ersten Weltkriegs, brach das Osmanische Reich, das an der Seite des Deutschen Reichs gekämpft und verloren hatte, zusammen. Die Siegermächte teilten daraufhin das Reich unter sich und erstarkenden nationalistischen Bewegungen auf. Kurdistan befindet sich in einem Machtvakuum, verwaltet sich jedoch selbst. Es entstehen Komitees und lokale Verteidigungseinheiten. Die Organisierung der Gesellschaft basiert dabei nicht auf der Macht von Feudalherrschern.`,
          },
          {
            title: "Das Sykes-Picot-Abkommen",
            type: "text",
            content: `1915, als der Zusammenbruch des Osmanischen Reichs schon in Aussicht stand, schlossen der französische Diplomat François Georges-Picot und der englische Diplomat Mark Sykes ein Abkommen, dass die Aufteilung des Osmanischen Reiches nach dessen Untergang festlegte. Neben der Schaffung neuer unabhängiger Staaten definierten sie die Mandatsgebiete Frankreichs und Englands. Die Gebiete des heutigen Jordaniens und des Zentral- und Südirak ging an die Briten, während sich Frankreich die Herrschaft über die Südost-Türkei, den Nordirak, Syrien und den Libanon sicherte.`,
          },
          {
            type: "text",
            content: `Ursprünglich wurde das Abkommen umgesetzt, England und Frankreich kamen nach Ende des Ersten Weltkriegs in Konflikt, nachdem Britische Truppen die Stadt Mossul und die umliegenden Erdölfelder besetzten, obwohl die Region des heutigen Iraks eigentlich Frankreich zugesprochen war. Außerdem wurden die Ansprüche und Ambitionen anderer Mächte in diesem Vertrag nicht berücksichtigt. US-Präsident Wilson fordert zusätzlich die Alliierten in seinem 14-Punkte-Plan dazu auf, die Kurd*innen die Unabhängigkeit zu ermöglichen.`,
          },
          {
            title: "Der Vertrag von Sèvres",
            type: "text",
            content: `Aufgrund dieser Konflikte gab es neue Verhandlungen, an denen nicht mehr nur Großbritannien und Frankreich beteiligt waren. Der daraus entstandene Vertrag von Sèvres wurde am 10. August 1920 unterzeichnet. Dieser Vertrag legte die Neuaufteilung des Osmanischen Reichs erneut fest. Die Region der Levante - Palästina, Jordanien, Syrien - teilten die Franzosen und Briten in separate Mandatsgebiete, und das weitgehend in Übereinstimmung mit den Sykes-Picot-Bestimmungen.`,
          },
          {
            type: "text",
            content: `Außerdem sollte es einen Staat Namens “Mesopotamien” geben und die Unabhängigkeit einiger Regionen war vorgesehen. Darunter auch die Kurd*innen. Da die Kurd*innen keine starke diplomatische Vertretung hatten, konnten sie aber nicht durchsetzen, dass alle Kurdengebiete die Unabhängigkeit erlangen. Als Autonomiegebiet wurde Ostanatolien festgelegt, das Grenzgebiet zu Syrien und dem Nordirak.`,
          },
          {
            type: "text",
            content: `Der Vertrag von Sèvres wurde zwar von der osmanischen Regierung unterzeichnet, vom Parlament aber nicht ratifiziert. Der Sultan löste kurzerhand das Parlament auf, und wenig später übernahm Mustafa Kemal Pascha, der Führer der türkischen Nationalbewegung, das Ruder. Er ist besser unter dem Namen Atatürk ("Vater der Türken") bekannt.`,
          },
          {
            title: "Griechische Expansion & Attatürks Feldzug",
            type: "text",
            content: `Ab Mai 1919 expandiert die griechische Armee weiter nach Osten und nimmt weiter Teile Anatoliens ein. Mustafa Kemal Pascha wird beauftragt, die griechischen Milizen zu bekämpfen. Er mobilisiert Osmanische Truppen zum Widerstand gegen Besatzungstruppen und gewinnt viele Kurd*innen mit Versprechungen, "einen Staat der Türken und Kurden zu gründen" für sich, welche entscheidend für seine späteren Erfolge sind. Dieser "Befreiungskrieg" endet 1922 mit dem Sieg Atatürks`,
          },
          {
            title: "Vertrag von Lausanne",
            content: `Die gestärkte Position der Türkei aus diesem Sieg ermöglicht der Türkischen Regierung, die Revision des Vertrags von Sèvres und neue Verhandlungen über die territoriale Aufteilung des ehemaligen Osmanischen Reichs zu erzwingen.`,
            type: "text",
          },
          {
            content: `Der Vertrag von Lausanne wird am 24. Juli 1923 Unterzeichnet und legitimiert den neuen Türkischen Staat und seine Gebietsansprüche. Hierbei werden die Ansprüche der Kurd*innen übergangen. Von einem autonomen Kurdenstaat ist nicht mehr die Rede, obwohl Atatürk den Kurd*innen während des griechisch-türkischen Kriegs Unabhängigkeit zugesichert hatte. So wurde Kurdistan in vier politisch getrennte Gebiete: Bakur (Türkei), Başûr (Irak), Rojava (Syrien) und Rojhilat (Persien) aufgeteilt.`,
            type: "text",
          },
          {
            title: "Rotes Kurdistan & andere Bestrebungen",
            content: `In der sowjetischen Provinz Aserbaidschan bildet sich am 23.05.1923 die “Kurdische Autonome Provinz”, auch Rotes Kurdistan (Kurdistana Sor) genannt. Das Rote Kurdistan besteht bis 1929, da dann die Bewohner der Region von Stalin nach Mittelasien umgesiedelt werden. Eine Neugründung 1991 scheitert am Zerfall der UdSSR.`,
            type: "text",
          },
          {
            content: `1925 stimmt eine Mehrheit der Kurd*innen in Südkurdistan in einer vom Völkerbund durchgeführten Abstimmung für eine Unabhängigkeit vom Irak. Auf britische Forderungen hin entscheidet sich der Völkerbund gegen das Votum und gliedert die erdölreichen Region Südkurdistan mit den Städten Kerkuk und Mossul an den Irak an. Die Anteile der irakischen Erdölgesellschaft gehen an englische, amerikanische und französische Firmengruppen.`,
            type: "text",
          },
        ],
      },
      {
        title: "Heute",
        content: [
          {
            title: "Bakur - Nordkurdistan",
            type: "text",
            content: `Bakur ist der türkische Teil Kurdistans. Das Gebiet erstreckt sich zwischen Gaziantep und Hakkâri (kurdisch: Colemêrg) und von Malatya bis Kars und hat keine autonome Regierung und Institutionen.`,
          },
          {
            title: "Bundeszentrale für politische Bildung - Der Kurdenkonflikt",
            type: "quote",
            content: `Die Gründung des türkischen Nationalstaates im Jahre 1923 bedeutete für die in der Türkei lebenden 12 bis 15 Millionen Kurden eine wichtige Zäsur: In der türkischen Verfassung stand von Beginn an der Nationalismus, die nationale Einheit, als das erste der sechs Prinzipien des Kemalismus festgeschrieben. So heißt es auch heute im Artikel 3 der Verfassung: "Der Staat Türkei ist ein in seinem Staatsgebiet und Staatsvolk unteilbares Ganzes. Seine Sprache ist Türkisch."`,
          },
          {
            type: "text",
            content: `In Folge der Machtübernahme Atatürks werden Kurd*innen immer mehr aus dem öffentlichen Leben der neu gegründeten Türkischen Republik verdrängt. Nach der Niederschlagung verschiedener Aufstände in den 20er und 30er Jahren werden die demokratischen Rechte in der Türkei immer weiter eingeschränkt und die Aufstände werden als Grund genommen, immer repressiver gegen Kurd*innen, andere Minderheiten und Oppositionelle vorzugehen.`,
          },
          {
            type: "text",
            content: `Dies hatte eine Politik der Zwangsassimilierung der Kurd*innen in eine türkische Einheitsidentität und sozio-ökonomische Vernachlässigung der kurdisch Bewohnten Gebiete zur Folge die teilweise bis heute anhält. In der türkischen Verfassung sind Staatsvolk und Staatsgebiet als unteilbare Einheit definiert und ermöglicht die Einschränkung vieler Grundrechte wie Presse- und Meinungsfreiheit.`,
          },
          {
            title: "Bundeszentrale für politische Bildung - Der Kurdenkonflikt",
            type: "quote",
            content: `[Dieser Grundsatz] ist beispielsweise schon dann berührt, wenn ethnische Minderheiten kulturelle Autonomie oder Selbstverwaltungsrechte fordern. Die Minderheitenklauseln des Lausanner Friedensvertrages von 1923 beziehen sich jedoch lediglich auf die nichtmuslimischen Minderheiten (Griechen, Armenier, Juden). Die Kurden gelten in der Türkei damit nicht als Minderheit.`,
          },
          {
            type: "text",
            content: `Diese Politik der Leugnung, Assimilierung und Vernachlässigung führte zu verschiedenen Aufständen und der Gründung von Widerstandsbewegungen. Die bekannteste darunter die Arbeiterpartei Kurdistans (PKK), die 1978 von u.a. Abdullah Öcalan gegründet wurde und von Anfang an militant Widerstand leistete.`,
          },
          {
            type: "text",
            content: `Seit den 1990er-Jahren gab es immer wieder verschiedene Lieberalisierungstendenzen, die unter Beibehaltung der militärischen Repression eine Liberalisierung im kulturellen Bereich einzuleiten versuchte und dabei eine nur begrenzte Liberalisierung anstrebte. Die begrenzte Liberalisierung erfolgte und erfolgt unter Wahrung der staatsideologischen Grundlagen ("Eine Nation, eine Flagge, eine Sprache") und lief gleichzeitig mit der Eindämmung kurdischer Politik und Forderungen einher.`,
          },
          {
            type: "text",
            content: ` So wurden in verschiedenen Reformen persönliche Freiheiten verbessert, die Ausweitung der Nutzung der kurdischen Sprache versprochen und die Nutzung der Buchstaben x, q und w erlaubt, die im türkischen Alphabet nicht vorkommen und ehemals verbotene kurdische Ortsnamen wieder eingeführt, kurdische oder pro-kurdische Organisationen und Parteien sind jedoch weiterhin Repressionen ausgesetzt. So werden gegen Abgeordnete der Partei HDP immer wieder Gerichtsprozesse angefangen und Internationale Wahlbeobachter*innen erklären Wahlen in der Türkei als weder frei noch demokratisch`,
          },
          {
            title: "Başûr -  Südkurdistan",
            type: "text",
            content: `Der irakische Teil Kurdistans unterscheidet sich von den anderen Teilen Kurdistan dadurch, dass Başûr schon seit Jahrzehnten Teilautonomie, ein eigenes Parlament, eine Regierung und ein eigenes Militär - die Peschmerga - besitzt.`,
          },
          {
            type: "text",
            content: `Die Peschmerga sind in den letzten Jahren vor allem durch ihren Kampf gegen den sogenannten Islamischen Staat (IS) bekannt geworden. Nachdem sie sich 2014 ursprünglich zurückzogen, trieben sie später den IS so weit zurück, dass die gesamte Region wieder unter ihrer Kontrolle steht. Sie werden als Helden gefeiert, aber es gibt auch viel Kritik an ihnen. Den Peschmerga wird vorgeworfen, dass sie am Anfang des Krieges Siedlungen anderer ethnischer Gruppen zurück und im Stich ließen. Außerdem wurden ganze arabische Dörfer zerstört, mit dem expliziten Ziel, dass die Araber*innen nicht wieder heim kehren können.`,
          },
          {
            type: "text",
            content: `Der genaue Grenzverlauf zwischen der Autonomen Region und dem Irak ist umstritten, da die Autonome Region aus historischen und ethnischen Gründen mehr Gebiet beansprucht als der Irak offiziell erlaubt. Die umstrittenen Regionen sind erdölreich und der irakische Staat beansprucht sie für sich. Schon in den 1980er-Jahren versuchte Saddam Hussein die kurdische Stadt Kirkuk, die als heimliche Hauptstadt der Kurden gilt und sinnbildlich für diesen Grenzkonflikt steht, zu arabisieren und die kurdische Bevölkerung teilweise auch gewaltsam zu deportieren.`,
          },
          {
            type: "text",
            content: `In der Autonomen Region Kurdistan gibt es zwei große Parteien, die die Region unter sich aufteilen. Sie sind aber keine klassischen politischen Parteien, sondern sind großen Familienclans zuzuordnen. Einerseits gibt es die Familie Barzani und ihre Partei DPK (Demokratische Partei Kurdistans) und andererseits die Familie Talabani und ihre Partei PUK (Patriotische Union Kurdistans). Die beiden Parteien bekämpften sich viele Jahre mit ihren Parteiarmeen gegenseitig.`,
          },
          {
            title:
              "Tobias Huch - Kurdistan: Wie ein unterdrücktes Volk den Mittleren Osten stabilisiert",
            type: "quote",
            content: `Kein Feind von außen vermochten die Kurden je so sehr zu schwächen, wie es dieser Krieg unter ihnen selbst getan hat`,
          },
          {
            type: "text",
            content: `Neben den zwei großen Parteien gibt es noch kleinere Parteien. Die bedeutsamste unter ihnen ist die Partei Gorran. "Gorran" ist kurdisch für "Wandel" oder "Bewegung". Sie entstand aus Reformern beider großen Parteien und zunehmender Kritik an den kurdischen Clan-Strukturen in Başûr. Außerdem gibt es die Muslimbruderschaft, die islamistisch-nationalistisch orientiert ist und die Partei Islamische Gemeinschaft in Kurdistan, die einen kurdischen Scharia-Staat anstrebt.`,
          },
          {
            type: "text",
            content: `Nach westlichen Standards ist Başûr relativ modern und demokratisch. Das Sozial- und Gesundheitssystem, die Verkehrswege, Digitalisierung, Presse- und Meinungsfreiheit sind vor allem im Vergleich zu den umliegenden Staaten sehr ausgebaut.`,
          },
          {
            title: "Rojava - Westkurdistan",
            type: "text",
            content: `Der syrische Teil Kurdistans liegt im Norden Syriens und ist vergleichsweise klein. In Folge des syrischen Bürgerkriegs ist hier die Demokratische Föderation Nordsyrien entstanden, die vor allem von der PKK ideologisch nahestehenden PYD (Partei der Demokratischen Union) geprägt wird.`,
          },
          {
            type: "text",
            content: `Die PYD wurde von der PKK solidarischen Kurd*innen gegründet, die nach dem Verbot der Partei nach Syrien auswanderten. Deshalb hat die PYD auch den gleichen Ideologischen Kern wie die PKK, wie zum Beispiel die Selbstbezeichnung als libertär-sozialistisch und die Hauptidee des sogenannten demokratischer Konföderalismus.`,
          },
          {
            type: "text",
            content: `Der demokratische Konföderalismus hat das Ziel eine staatenlose demokratisch-ökologische Gesellschaft aufzubauen. Der Fokus liegt neben dem Aufbau einer ökologischen Gesellschaft auch auf der Frauenbefreiung. Jede wichtige politische Position wird immer doppelt besetzt und niemand darf alleine eine Entscheidung treffen. Religionsfreiheit und Minderheitenschutz sind weitere wichtige Standpunkte.`,
          },
          {
            type: "text",
            content: `Die Volksverteidigungseinheiten YPG/YPJ waren eine wichtige Kraft beim Kampf gegen den IS, da sie zuerst allein und dann als Teil der 2015 gegründeten Demokratischen Kräfte Syriens (SDF) gegen den IS kämpften.`,
          },
          {
            type: "text",
            content: `Seit 2016 führt die Türkei einen Angriffskrieg auf Rojava. Unterstützt wird die Türkische Armee von ehemaligen IS-Kämpfern, Mitgliedern von al-Qaida und Islamisten der sogenannten "Freien Syrischen Armee". Die kurdischen Bewohner*innen der besetzten Städte werden enteignet, vertrieben oder ermordet und die neuen Machthaber setzen die Scharia als neue Rechtsquelle durch.  In Schulen wird nicht mehr auf kurdisch, sondern auf Türkisch, unterrichtet, an Gebäuden sind türkische Aufschriften und Fahnen.`,
          },
          {
            type: "text",
            content: `Die Türkei wendet in den letzten Jahren immer mehr Luftangriffe, vor allem mit Drohnen an. Mit gezielten Angriffen auf essenzielle Infrastruktur wird versucht, die Bevölkerung zu zermürben und in ständiger Angst vor Angriffen dazu zu bringen, sich weniger in die Öffentlichkeit zu wagen.`,
          },
          {
            title: "Rojhulat - Ostkurdistan",
            type: "text",
            content: `Ostkurdistan liegt im Iran und ist der wahrscheinlich am wenigsten wahrgenommene Teil Kurdistans, obwohl ein großer Teil der Kurd*innen (12 Mio.) hier lebt. Sie werden aber von der iranischen Regierung brutal unterdrückt und ihrer Identität abgesprochen.`,
          },
          {
            type: "text",
            content: `Nichtsdestotrotz ist die Hauptstadt der Region, Mahabad, ein wichtiges Symbol kurdischen Wiederstands und kurdischer Unabhängigkeit, da 1946 hier die kurdische Republik Mahabad ausgerufen wurde, die für 11 Monate bestand. Die Republik hatte jedoch eine große Abhängigkeit von der UdSSR und wurde nach dem Rückzug sowjetischer Truppen von iranischen Truppen überrannt. Seitdem wird die kurdische Kultur massiv unterdrückt. Die Flagge der Republik Mahabad diente als Vorbild für die Flagge der Autonomen Region Başûr.`,
          },
          {
            type: "image",
            content: mahbadflag,
            title: "Flagge der Republik Mahabad",
          },
          {
            type: "text",
            content: `Kurdische Parteien we die DPK-I (Demokratische Partei des Iranischen Kurdistans) und die PAK (Freiheitspartei) müssen wie alle anderen oppositionellen Kräfte im Iran im Untergrund agieren und werden verfolgt. Die PAK unterhält auch Peschmerga-Einheiten die wie andere kurdische Einheiten am Kampf gegen den IS teilnahmen.`,
          },
          {
            type: "text",
            content: `Seit September 2022 gibt es wieder Massenproteste im Iran. Ausgelöst wurden sie durch den Mord der kurdischen Iranerin Jina Mahsa Amini durch iranische Polizisten. Der kurdische Ausspruch “Jin, Jiyan, Azadî” (Frauen, Leben, Freiheit) wurde zu einem der Hauptparolen der Proteste und erlangte so neue weltweite Bekanntheit, nachdem er ursprünglich ein Slogan der PKK war und auch im Kontext mit Rojava oft verwendet wird`,
          },
        ],
        interactionData: dToday,
        interactionType: "filter",
      },
    ],
  },
  {
    id: 1,
    title: "Demografie",
    chapters: [
      /**
      {
        title: "Lebensstandard",
        interactionData: dLinguistics,
        interactionType: "filter",
        content: [{ title: "Überschrift", content: "", type: "text" }],
      }, */
      {
        title: "Bevölkerungsanteil",
        interactionData: dDemography,
        interactionType: "filter",
        content: [{ title: "Überschrift", content: "", type: "text" }],
      },
      {
        title: "Sprache",
        interactionData: dLinguistics,
        interactionType: "filter",
        content: [{ title: "Überschrift", content: "", type: "text" }],
      },
      {
        title: "Religion",
        interactionData: dWorldWarToday,
        interactionType: "timeline",
        content: [{ title: "Überschrift", content: "", type: "text" }],
      },
    ],
  },
  {
    id: 2,
    title: "Unterdrückung & Widerstand",
    chapters: [
      {
        title: "Verbote",
        interactionData: dWorldWarToday,
        interactionType: "timeline",
        content: [{ title: "Überschrift", content: "", type: "text" }],
      },
      {
        title: "Genozide",
        interactionData: dWorldWarToday,
        interactionType: "timeline",
        content: [{ title: "Überschrift", content: "", type: "text" }],
      },
      {
        title: "Widerstand",
        interactionData: dWorldWarToday,
        interactionType: "timeline",
        content: [{ title: "Überschrift", content: "", type: "text" }],
      },
    ],
  },
];

export type chapterContent = {
  title?: string;
  type: "text" | "quote" | "image" | "video";
  content: string;
};

type chapterBase = {
  title: string;
  content: chapterContent[];
  background?: string;
  backgroundColor?: string;
  backgroundOpacity?: number;
  backgroundOutline?: number;
  small?: boolean;
};

type filterChapter = chapterBase & {
  interactionData: mapDataPoint[];
  interactionType: "filter";
};

type timelineChapter = chapterBase & {
  interactionData: timelineDataPoint[];
  interactionType: "timeline";
};

export type chapter = filterChapter | timelineChapter;

export type topic = {
  id: number;
  title: string;
  chapters: chapter[];
  defaultColor?: string;
};

export type topicList = { topics: topic[]; get: (id: number) => topic };

export const topicList: topicList = {
  topics: topics,
  get(id) {
    return topics.find((topic) => topic.id === id) ?? topics[0];
  },
};
