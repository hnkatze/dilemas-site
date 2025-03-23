

interface Props {
  orientation?: "even" | "odd";
  title: string;
  question: string;
  conclusions: string;
  options: string[];
  imageUrl: string;
  imageAlt: string;
}
export const dilemmas: Props[] = [
  {
    "orientation": "even",
    "title": "Venta de datos a terceros",
    "question": "¿Es ético que las organizaciones vendan o compartan datos personales con terceros?",
    "conclusions": "En el mundo tecnológico actual, muchas aplicaciones 'gratuitas' monetizan recopilando y vendiendo información personal sin el consentimiento informado de los usuarios. Aunque existen regulaciones como el GDPR en la Unión Europea y la Ley Federal de Protección de Datos Personales en México que imponen sanciones severas por incumplimiento, en Honduras no contamos con una ley específica que prevenga la venta de datos a terceros. Sin embargo, la Constitución de la República, en su Artículo 182, reconoce el derecho de los ciudadanos a conocer qué información se está recopilando y su uso. Además, la Ley de Transparencia y Acceso a la Información Pública limita el acceso a datos personales sensibles guardados por el estado.",
    "options": [
      "Implementar regulaciones específicas que prohíban la venta de datos sin consentimiento",
      "Fomentar la transparencia en las políticas de privacidad de las empresas",
      "Educar a los usuarios sobre sus derechos respecto a sus datos personales"
    ],
    "imageUrl": "https://static.vecteezy.com/system/resources/previews/007/079/927/non_2x/personal-data-sell-to-third-party-which-is-against-to-privacy-protection-law-vector.jpg",
    "imageAlt": "Ilustración sobre la venta de datos personales"
  },
  {
    "orientation": "odd",
    "title": "Privacidad vs. Personalización",
    "question": "¿Qué pesa más, la privacidad de las personas o la capacidad de ofrecerles un servicio más personalizado?",
    "conclusions": "Las empresas buscan ofrecer experiencias de usuario personalizadas, lo que implica la recopilación de datos personales. Es esencial que los usuarios otorguen su consentimiento de forma clara y estén informados sobre qué datos se recopilan y con qué fines. Prácticas que omiten o no explican claramente estos aspectos no son éticas. Además, las empresas deben limitar la recopilación de datos a lo necesario para mejorar la experiencia del usuario y ser transparentes, permitiendo a los usuarios acceder, modificar o eliminar su información, así como decidir qué datos desean compartir.",
    "options": [
      "Priorizar la privacidad del usuario limitando la recopilación de datos",
      "Ofrecer opciones claras para que los usuarios elijan el nivel de personalización deseado",
      "Implementar políticas transparentes sobre el uso y almacenamiento de datos"
    ],
    "imageUrl": "https://img.freepik.com/vector-premium/usuario-interactua-tableta-personalizar-configuracion-privacidad-mientras-esta-rodeado-iconos-seguridad-politica-privacidad-ilustracion-dibujos-animados-personalizable_538213-145938.jpg",
    "imageAlt": "Ilustración sobre privacidad y personalización"
  },
  {
    "orientation": "even",
    "title": "Venta de datos a terceros",
    "question": "¿Es ético que las organizaciones vendan o compartan datos personales con terceros?",
    "conclusions": "En el mundo tecnológico actual, muchas aplicaciones 'gratuitas' se sostienen mediante la monetización de la información personal de sus usuarios. Numerosos casos han evidenciado que empresas venden datos sobre la actividad en línea sin obtener un consentimiento genuino e informado. Existen normativas en ciertas regiones, como el General Data Protection Regulation (GDPR) en la Unión Europea, que impone multas de hasta el 4% de los ingresos anuales en caso de incumplimiento, y la Ley Federal de Protección de Datos Personales en Posesión de los Particulares en México, donde las sanciones pueden ser millonarias e incluso duplicarse si se tratan datos sensibles. Sin embargo, en países como Honduras no existe una legislación específica que regule la venta de datos a terceros, limitándose la protección a lo establecido en la Constitución de la República (Artículo 182) y en la Ley de Transparencia y Acceso a la Información Pública. Esto genera el dilema ético de monetizar información sin que los usuarios comprendan plenamente el alcance y las consecuencias de ceder sus datos.",
    "options": [
      "Implementar regulaciones específicas que prohíban la venta de datos sin un consentimiento informado y explícito",
      "Fomentar la transparencia en las políticas de privacidad y en el uso de datos por parte de las empresas",
      "Educar a los usuarios sobre sus derechos y la importancia de revisar y entender las políticas de privacidad"
    ],
    "imageUrl": "https://i.pinimg.com/736x/f6/09/41/f6094121ae8689a84eebb990d664440a.jpg",
    "imageAlt": "Ilustración sobre la venta de datos personales"
  },
  {
    "orientation": "odd",
    "title": "Discriminación y sesgos",
    "question": "¿El uso de datos puede llevar a prácticas discriminatorias?",
    "conclusions": "El uso de datos para entrenar algoritmos automatizados, aunque permite optimizar procesos y personalizar experiencias, puede reproducir o incluso amplificar sesgos presentes en los datos históricos. Esto puede generar segmentaciones o perfiles injustos, afectando a determinados grupos de manera desigual. La cuestión ética se centra en cómo evitar que el análisis de datos refuerce la desigualdad o la discriminación. Es fundamental implementar estrategias de auditoría de sesgos, promover la diversidad en los equipos de desarrollo y asegurar la transparencia en la toma de decisiones automatizadas para mitigar estos riesgos.",
    "options": [
      "Implementar mecanismos robustos de detección y corrección de sesgos mediante auditorías periódicas",
      "Ajustar y actualizar continuamente los algoritmos incorporando métricas de equidad y diversidad",
      "Garantizar la supervisión humana en la toma de decisiones automatizadas y revisar los procesos de análisis regularmente"
    ],
    "imageUrl": "https://i.pinimg.com/736x/f3/e7/3e/f3e73ed5c51b3f909daab675687e6d2d.jpg",
    "imageAlt": "Ilustración sobre discriminación y sesgos en datos"
  },
  {
    "orientation": "even",
    "title": "Rastreo de menores y personas vulnerables",
    "question": "¿Es ético rastrear a usuarios que no tienen la capacidad de comprender las implicaciones de compartir sus datos?",
    "conclusions": "El rastreo de menores y de personas en situaciones de vulnerabilidad plantea un serio dilema ético y legal. Muchas aplicaciones y servicios digitales recopilan datos de usuarios que, por su edad o su limitada alfabetización digital, no pueden comprender plenamente las implicaciones de compartir su información personal. Esto vulnera su derecho a la privacidad y puede exponerlos a riesgos adicionales, ya que la falta de un consentimiento informado y la ambigüedad en las políticas de privacidad favorecen prácticas explotadoras. Además, la ausencia de regulaciones específicas y adaptadas para la protección de estos grupos en algunos países agrava la situación, haciendo indispensable la implementación de medidas especiales y normativas que prioricen la seguridad y el bienestar de estos usuarios.",
    "options": [
      "Establecer normativas específicas y rigurosas para la protección de menores y personas vulnerables",
      "Requerir el consentimiento informado de tutores o representantes legales antes de recopilar datos de estos usuarios",
      "Implementar auditorías y controles estrictos en el manejo y tratamiento de los datos de usuarios en situación de vulnerabilidad"
    ],
    "imageUrl": "https://i.pinimg.com/736x/e3/a6/a3/e3a6a388556d9ba29cf39427bf08401a.jpg",
    "imageAlt": "Ilustración sobre rastreo de menores y vulnerables"
  }
  ,
  {
    "orientation": "odd",
    "title": "Uso de datos para manipulación",
    "question": "¿Qué pasa cuando los datos se usan para influir en decisiones personales o sociales?",
    "conclusions": "Los datos pueden ser utilizados para manipular la opinión pública, influir en elecciones o inducir al consumo, lo que plantea la cuestión de los límites éticos. En la era digital, el uso indebido de datos personales se ha convertido en una herramienta poderosa para moldear percepciones y comportamientos. Esta manipulación puede manifestarse a través de la segmentación excesiva, la personalización de contenido de manera engañosa, o incluso la creación y difusión de noticias falsas. La pregunta ética se centra en dónde está la línea entre informar y manipular, y cómo garantizar que el uso de datos respete la autonomía y la integridad de los individuos.",
    "options": [
      "Utilizar los datos de forma transparente y responsable, asegurando el consentimiento informado y la rendición de cuentas",
      "Promover la educación digital y la alfabetización en datos para que los usuarios reconozcan y eviten manipulaciones",
      "Regular estrictamente el uso de datos mediante normativas que protejan la libertad de información y prevengan abusos"
    ],
    "imageUrl": "https://i.pinimg.com/736x/e4/3a/4c/e43a4cba69d83e62bf14c17f5dfb3b9d.jpg",
    "imageAlt": "Ilustración sobre manipulación mediante datos"
  }
,
{
  "orientation": "even",
  "title": "Consentimiento manipulado y condiciones confusas",
  "question": "¿Es ético obtener el consentimiento del usuario cuando está diseñado para ser confuso o manipulador?",
  "conclusions": "Muchas plataformas digitales presentan términos y condiciones en textos largos, técnicos o difíciles de entender, a menudo acompañados de dark patterns que empujan a los usuarios a aceptar el rastreo o compartir datos sin plena conciencia. Aunque el consentimiento es la base legal y ética para el tratamiento de datos personales, pierde validez cuando no es otorgado de forma libre, informada y explícita. Esto es especialmente problemático para grupos vulnerables como niños, adultos mayores, personas con baja alfabetización digital o con discapacidades cognitivas, para quienes comprender estas políticas resulta aún más complicado. Además, algunas empresas deliberadamente redactan sus políticas en un lenguaje ambiguo o excesivamente jurídico, priorizando la protección legal sobre el respeto a los derechos del usuario.",
  "options": [
    "Redactar términos y condiciones claros, accesibles y comprensibles para todos",
    "Regular y prohibir el uso de dark patterns que manipulen el consentimiento del usuario",
    "Requerir procesos de consentimiento interactivos y específicos para grupos vulnerables"
  ],
  "imageUrl": "https://i.pinimg.com/736x/6e/cf/13/6ecf137c599c1ed583912a0ca8aed9fc.jpg",
  "imageAlt": "Ilustración sobre consentimiento manipulado y dark patterns"
},
{
  "orientation": "odd",
  "title": "Uso secundario de datos personales",
  "question": "¿Es ético utilizar los datos personales para fines diferentes a los informados originalmente?",
  "conclusions": "Una empresa puede recopilar datos personales con un fin específico, como mejorar la experiencia del usuario en su app, pero luego decidir utilizar esos mismos datos para entrenar algoritmos de reconocimiento facial o vender insights a anunciantes. Este uso secundario de los datos representa una reutilización no autorizada que vulnera el principio de transparencia y el consentimiento inicial del usuario. Cuando se modifican los fines de uso, debería solicitarse un nuevo consentimiento que informe claramente al usuario sobre el cambio. De lo contrario, se incurre en prácticas invasivas que pueden poner en riesgo la privacidad, la dignidad y la seguridad de los individuos, generando además una crisis de confianza digital.",
  "options": [
    "Solicitar un nuevo consentimiento específico cuando se cambien los fines de uso de los datos",
    "Limitar el uso de datos a los fines originalmente informados y autorizados",
    "Establecer normativas que regulen la reutilización de datos personales y protejan la confianza digital"
  ],
  "imageUrl": "https://i.pinimg.com/736x/ce/db/55/cedb559bd638aeae02d58a30ca76b174.jpg",
  "imageAlt": "Ilustración sobre reutilización y uso secundario de datos personales"
}
]

