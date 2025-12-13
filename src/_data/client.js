module.exports = {
    "name": "Regent Thai Massage & Spa",
    "email": "info@regentthaimassageandspa.co.uk",
    "phoneForTel": "+447301291923",
    "phoneFormatted": "07301 291923",
    "openingHours": "Mon-Sat: 10am-8pm, Sun: 11am-7pm",
    "onlineBooking": "https://regentthaimassagespa.setmore.com/",
    "address": {
        "lineOne": "3, Ormond Terrace",
        "lineTwo": "Regent St",
        "city": "Cheltenham",
        "state": "",
        "zip": "GL50 1HR",
        "country": "UK",
        "mapLink": "https://maps.app.goo.gl/qAHseAEmAKRpXHxF6"
    },
    "socials": {
        "facebook": "https://www.facebook.com/people/Regent-Thai-massage-Cheltenham/61570157464844/?locale=en_GB",
        "instagram": "https://www.instagram.com/regent_thaimassage_cheltenham/",
        "googleReview": "https://g.page/r/CY4v3czmGv6ZEBM/review",
    },
    //! Make sure you include the file protocol (e.g. https://) and that NO TRAILING SLASH is included
    "domain": "https://www.regentthaimassageandspa.co.uk",
    "schema": {
        "business": {
            "@context": "https://schema.org",
            "@type": "HealthAndBeautyBusiness",
            "@id": "https://www.regentthaimassageandspa.co.uk/#business",
            "name": "Regent Thai Massage & Spa",
            "image": "https://www.regentthaimassageandspa.co.uk/assets/svgs/logo-l.svg",
            "url": "https://www.regentthaimassageandspa.co.uk",
            "telephone": "+447301291923",
            "email": "info@regentthaimassageandspa.co.uk",
            "priceRange": "££",
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "3, Ormond Terrace, Regent St",
                "addressLocality": "Cheltenham",
                "postalCode": "GL50 1HR",
                "addressCountry": "GB"
            },
            "geo": {
                "@type": "GeoCoordinates",
                "url": "https://maps.app.goo.gl/qAHseAEmAKRpXHxF6"
            },
            "openingHoursSpecification": [
                {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                    "opens": "10:00",
                    "closes": "20:00"
                },
                {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": "Sunday",
                    "opens": "11:00",
                    "closes": "19:00"
                }
            ],
            "sameAs": [
                "https://www.facebook.com/people/Regent-Thai-massage-Cheltenham/61570157464844/?locale=en_GB",
                "https://www.instagram.com/regent_thaimassage_cheltenham/",
                "https://g.page/r/CY4v3czmGv6ZEBM/review"
            ]
        },
        "website": {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "@id": "https://www.regentthaimassageandspa.co.uk/#website",
            "url": "https://www.regentthaimassageandspa.co.uk",
            "name": "Regent Thai Massage & Spa",
            "publisher": {
                "@id": "https://www.regentthaimassageandspa.co.uk/#business"
            }
        }
    }
};



