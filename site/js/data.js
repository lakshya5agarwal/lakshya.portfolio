// ============ EDIT ME ============
// Add a project: push an object into `projects`. `section` decides where it appears:
// "lakshyas-design" | "vedanta" | "organisations" | "print" | "college". Empty sections hide themselves.
export const profile = {
  name: "Lakshya Agarwal", brand: "Lakshya's Design", role: "Graphic Designer & Visual Designer",
  tagline: "Designing visuals that communicate, connect and stand out.",
  email: "",                       // TODO: add your email — the contact button appears automatically
  phone: "+918769958579",          // from your old creatives; change if needed
  instagram: "", linkedin: "",     // TODO: add full URLs
};
const A = (d, names) => names.map(n => ({ src: `assets/${d}/${n}.webp`, alt: n.replace(/-/g, " ") }));
export const projects = [
  { id: "festival", section: "lakshyas-design", title: "Festival & Occasion Creatives", category: "Social Media",
    description: "Greeting creatives for Hanuman Jayanti, Sardar Patel Jayanti, Netaji Jayanti, Holika Dahan, Rath Yatra and Gudi Padwa — typography-led, one idea per post.",
    images: A("lakshyas-design", ["hanuman-stone","hanuman-gold","sardar-patel","netaji","holika-dahan","rath-yatra","gudi-padwa"]) },
  { id: "murari-nutsixer", section: "organisations", org: "Murari Nuttz & Dry Fruits", title: "The Nut Sixer — Snack Campaign", category: "Campaign Design",
    description: "Social creatives for a cricket-themed cashew snack pouch: summer, travel and taste-led headlines.",
    images: A("organisations", ["murari-summer","murari-taste-ke-deewane","murari-delicious-timer","murari-magic-of-nutsixer","murari-pack-light"]) },
  { id: "murari-jars", section: "organisations", org: "Murari Nuttz & Dry Fruits", title: "Premium Cashew Jars — The Reveal", category: "Campaign Design",
    description: "A reveal-style series for roasted masala, pepper and salted cashew jars.",
    images: A("organisations", ["murari-three-jars","murari-cape","murari-reveal","murari-curtain","murari-cashew-pepper","murari-jars"]) },
  { id: "murari-products", section: "organisations", org: "Murari Nuttz & Dry Fruits", title: "Product Posts", category: "Social Media",
    description: "Single-product creatives for cashews, pistachio, raisins and trail mix.",
    images: A("organisations", ["murari-victory-lap","murari-pistachio","murari-raisins","murari-trail-mix"]) },
  { id: "castle", section: "organisations", org: "Castle Real Estate", title: "Property Promotions (Arabic)", category: "Campaign Design",
    description: "Bilingual-market real-estate posts with Arabic typography.",
    images: A("organisations", ["castle-mirror","castle-circle","castle-tower"]) },
  { id: "maxelon", section: "organisations", org: "Maxelon", title: "Rapid Cable", category: "Social Media",
    description: "Product creative for a braided charging cable.", images: A("organisations", ["maxelon-rapid"]) },
  { id: "style", section: "organisations", org: "Salon", title: "Style Revolution", category: "Social Media",
    description: "Salon promotional creative.", images: A("organisations", ["style-revolution"]) },
  { id: "logos", section: "print", title: "Logo Designs", category: "Branding", description: "Logo marks across retail, education, finance and healthcare.", images: A("portfolio", ["logo-designs"]) },
  { id: "identity", section: "print", title: "Brand Identity", category: "Branding", description: "Business cards and letterhead.", images: A("portfolio", ["brand-identity"]) },
  { id: "brochure", section: "print", title: "Brochure Design", category: "Print", description: "Brochure covers.", images: A("portfolio", ["brochure-design"]) },
  { id: "school", section: "print", title: "School Book Design", category: "Print", description: "Pre-school workbook covers and pages.", images: A("portfolio", ["school-book-design"]) },
  { id: "packaging", section: "print", title: "Packaging Design", category: "Print", description: "Snack, pharma and rice packaging.", images: A("portfolio", ["packaging-design"]) },
  { id: "mascots", section: "print", title: "Caricature & Brand Mascots", category: "Illustration", description: "Vector caricatures and mascot characters.", images: A("portfolio", ["caricature-mascot"]) },
];
// Selected Work: ids shown in the editorial grid (first = biggest)
export const featured = ["murari-nutsixer", "festival", "castle", "murari-jars", "mascots", "packaging"];
