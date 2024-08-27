export const getResponseFromService = async (query) => {
    const responses = [];
    const normalizedQuery = query.toLowerCase();
  
    // Handling various queries
    if (normalizedQuery.includes("hello") || normalizedQuery.includes("hi") || normalizedQuery.includes("hey")) {
      responses.push("Hello! How can I assist you today?");
    }
    if (normalizedQuery.includes("company name") || normalizedQuery.includes("company") || normalizedQuery.includes("what is your company called")) {
      responses.push("The name of our company is COMPANY123.");
    }
    if (normalizedQuery.includes("price") || normalizedQuery.includes("prices") || normalizedQuery.includes("cost")) {
      responses.push("Our prices vary depending on the item. Please visit our website to check out the items and their prices.");
    }
    if (normalizedQuery.includes("links") || normalizedQuery.includes("website") || normalizedQuery.includes("site")) {
      responses.push("You can find more information and links on our website. Check out [our homepage](https://www.company123.lk) for more details.");
    }
    if (normalizedQuery.includes("how to buy") || normalizedQuery.includes("buy") || normalizedQuery.includes("purchase")) {
      responses.push("To purchase our items, visit our website and follow the instructions on the product pages. If you need further assistance, please contact us.");
    }
    if (normalizedQuery.includes("where") || normalizedQuery.includes("location") || normalizedQuery.includes("address")) {
      responses.push("Our main office is located at 123 Main Street, Kurunegala, Sri Lanka.");
    }
    if (normalizedQuery.includes("help") || normalizedQuery.includes("support") || normalizedQuery.includes("assistance")) {
      responses.push("For support, please email support@company123.lk or visit our support page on our website.");
    }
    if (normalizedQuery.includes("mobile number") || normalizedQuery.includes("number") || normalizedQuery.includes("phone")) {
      responses.push("You can contact us via email at contact@company123.lk or call us at +94 123 456 789.");
    }
    if (normalizedQuery.includes("email") || normalizedQuery.includes("contact email")) {
      responses.push("You can reach us at contact@company123.lk.");
    }
    if (normalizedQuery.includes("materials") || normalizedQuery.includes("what materials") || normalizedQuery.includes("materials used")) {
      responses.push("We use high-quality materials such as natural fibers and organic cotton for our products. If you have any specific queries about materials, feel free to ask!");
    }
    if (normalizedQuery.includes("opening hours") || normalizedQuery.includes("hours") || normalizedQuery.includes("when are you open")) {
      responses.push("We are open from Monday to Friday, 9 AM to 6 PM, and on Saturdays from 10 AM to 4 PM.");
    }
    if (normalizedQuery.includes("return policy") || normalizedQuery.includes("returns") || normalizedQuery.includes("refund")) {
      responses.push("We accept returns within 30 days of purchase. Please visit our returns page on the website for more details on how to return an item.");
    }
    if (normalizedQuery.includes("shipping") || normalizedQuery.includes("delivery") || normalizedQuery.includes("how long does shipping take")) {
      responses.push("Shipping times vary based on your location. Typically, orders are shipped within 2-3 business days. For more accurate delivery estimates, please check our shipping policy on the website.");
    }
    if (normalizedQuery.includes("warranty") || normalizedQuery.includes("guarantee") || normalizedQuery.includes("warranty policy")) {
      responses.push("We offer a 1-year warranty on all our products. For more details on our warranty policy, please visit our website.");
    }
    if (normalizedQuery.includes("faq") || normalizedQuery.includes("frequently asked questions")) {
      responses.push("You can find answers to common questions on our FAQ page. Visit [our FAQ page](https://www.company123.lk/faq) for more information.");
    }
    if (normalizedQuery.includes("services") || normalizedQuery.includes("what services do you offer")) {
      responses.push("We offer a range of services including custom orders, repairs, and product consultations. Visit our services page on the website for more details.");
    }
    if (normalizedQuery.includes("contact") || normalizedQuery.includes("reach out") || normalizedQuery.includes("get in touch")) {
      responses.push("You can contact us via our contact form on the website, or directly via email at contact@company123.lk.");
    }
    if (normalizedQuery.includes("feedback") || normalizedQuery.includes("suggestions") || normalizedQuery.includes("review")) {
      responses.push("We welcome your feedback! Please send your suggestions or reviews to feedback@company123.lk.");
    }
    if (normalizedQuery.includes("custom orders") || normalizedQuery.includes("special requests") || normalizedQuery.includes("bespoke products")) {
      responses.push("For custom orders and special requests, please visit our custom orders page or contact us directly.");
    }
    if (normalizedQuery.includes("bulk orders") || normalizedQuery.includes("wholesale") || normalizedQuery.includes("large quantity")) {
      responses.push("For bulk or wholesale orders, please contact us directly for pricing and availability.");
    }
    if (normalizedQuery.includes("product catalog") || normalizedQuery.includes("catalog") || normalizedQuery.includes("product list")) {
      responses.push("You can browse our product catalog on our website. Visit the [catalog page](https://www.company123.lk/catalog) for more details.");
    }
    if (normalizedQuery.includes("price list") || normalizedQuery.includes("pricing") || normalizedQuery.includes("costs")) {
      responses.push("Our price list is available on our website. Please visit [our pricing page](https://www.company123.lk/pricing) for more information.");
    }
    if (normalizedQuery.includes("shipping costs") || normalizedQuery.includes("delivery fees") || normalizedQuery.includes("shipping charges")) {
      responses.push("Shipping costs vary based on your location and the size of your order. Please refer to our shipping policy for detailed information.");
    }
    if (normalizedQuery.includes("payment methods") || normalizedQuery.includes("how to pay") || normalizedQuery.includes("payment options")) {
      responses.push("We accept various payment methods including credit cards, debit cards, and online payment systems. For more details, visit our payment methods page.");
    }
    if (normalizedQuery.includes("secure payment") || normalizedQuery.includes("payment security") || normalizedQuery.includes("secure checkout")) {
      responses.push("We ensure secure payment transactions using SSL encryption and secure payment gateways. Your information is protected.");
    }
    if (normalizedQuery.includes("order tracking") || normalizedQuery.includes("track order") || normalizedQuery.includes("order status")) {
      responses.push("You can track your order status through our website by visiting the order tracking page. Enter your order number for updates.");
    }
    if (normalizedQuery.includes("subscription") || normalizedQuery.includes("newsletter") || normalizedQuery.includes("sign up")) {
      responses.push("Sign up for our newsletter to receive updates on new products and special offers. Visit our subscription page to subscribe.");
    }
    if (normalizedQuery.includes("privacy policy") || normalizedQuery.includes("data protection") || normalizedQuery.includes("privacy")) {
      responses.push("We take your privacy seriously. Please read our [privacy policy](https://www.company123.lk/privacy-policy) for more information on how we protect your data.");
    }
    if (normalizedQuery.includes("terms of service") || normalizedQuery.includes("terms") || normalizedQuery.includes("conditions")) {
      responses.push("Our terms of service are available on our website. Please review our [terms and conditions](https://www.company123.lk/terms) before making a purchase.");
    }
    if (normalizedQuery.includes("refund policy") || normalizedQuery.includes("refunds") || normalizedQuery.includes("return policy")) {
      responses.push("Our refund policy allows returns within 30 days of purchase. Visit our returns page for more details on how to request a refund.");
    }
    if (normalizedQuery.includes("exchange policy") || normalizedQuery.includes("exchanges") || normalizedQuery.includes("exchange") || normalizedQuery.includes("return")) {
      responses.push("We offer exchanges for items within 30 days of purchase. Please visit our exchange policy page for details.");
    }
    if (normalizedQuery.includes("product warranty") || normalizedQuery.includes("warranty coverage") || normalizedQuery.includes("product guarantee")) {
      responses.push("Our products come with a 1-year warranty. For more information on warranty coverage, please visit our warranty page.");
    }
    if (normalizedQuery.includes("product features") || normalizedQuery.includes("item details") || normalizedQuery.includes("product specifications")) {
      responses.push("Detailed information about product features and specifications is available on each product page on our website.");
    }
    if (normalizedQuery.includes("brand") || normalizedQuery.includes("manufacturer") || normalizedQuery.includes("origin")) {
      responses.push("Our products are sourced from reputable brands and manufacturers. For more details on brands, visit our website.");
    }
    if (normalizedQuery.includes("stock availability") || normalizedQuery.includes("in stock") || normalizedQuery.includes("out of stock")) {
      responses.push("Check stock availability on our product pages. Items that are out of stock will be restocked soon, so keep an eye on our website.");
    }
    if (normalizedQuery.includes("discounts") || normalizedQuery.includes("promotions") || normalizedQuery.includes("special offers")) {
      responses.push("Stay updated on discounts and promotions by subscribing to our newsletter or visiting our promotions page on the website.");
    }
    if (normalizedQuery.includes("gift cards") || normalizedQuery.includes("buy gift card") || normalizedQuery.includes("gift certificates")) {
      responses.push("Purchase gift cards directly from our website. Visit our gift card page for more information and to buy a gift card.");
    }
    if (normalizedQuery.includes("loyalty program") || normalizedQuery.includes("rewards") || normalizedQuery.includes("points")) {
      responses.push("Join our loyalty program to earn rewards and points on every purchase. For more details, visit our loyalty program page.");
    }
    if (normalizedQuery.includes("membership") || normalizedQuery.includes("join") || normalizedQuery.includes("become a member")) {
      responses.push("Become a member to enjoy exclusive benefits and offers. Sign up on our membership page for more information.");
    }
    if (normalizedQuery.includes("store locator") || normalizedQuery.includes("find a store") || normalizedQuery.includes("physical locations")) {
      responses.push("Use our store locator tool on the website to find physical store locations near you.");
    }
    if (normalizedQuery.includes("product comparison") || normalizedQuery.includes("compare products") || normalizedQuery.includes("product review")) {
      responses.push("Compare products and read reviews on our website. Visit the product comparison page for detailed comparisons and reviews.");
    }
    if (normalizedQuery.includes("product care") || normalizedQuery.includes("maintenance") || normalizedQuery.includes("care instructions")) {
      responses.push("For product care instructions and maintenance tips, please refer to the care guide included with your purchase or visit our care instructions page.");
    }
    if (normalizedQuery.includes("installation") || normalizedQuery.includes("setup") || normalizedQuery.includes("how to install")) {
      responses.push("Installation instructions are provided with the product or can be found on our installation guide page on the website.");
    }
    if (normalizedQuery.includes("technical support") || normalizedQuery.includes("troubleshooting") || normalizedQuery.includes("tech help")) {
      responses.push("For technical support and troubleshooting, please visit our support page or contact us directly for assistance.");
    }
    if (normalizedQuery.includes("user manual") || normalizedQuery.includes("instruction manual") || normalizedQuery.includes("guide")) {
      responses.push("User manuals and guides are available on our website. Visit the product page to download or view the manual.");
    }
    if (normalizedQuery.includes("product recall") || normalizedQuery.includes("recall notice") || normalizedQuery.includes("safety alert")) {
      responses.push("Check our website for any product recalls or safety alerts. We will provide updates and instructions if a recall is issued.");
    }
    if (normalizedQuery.includes("sustainability") || normalizedQuery.includes("eco-friendly") || normalizedQuery.includes("green initiatives")) {
      responses.push("We are committed to sustainability and eco-friendly practices. Visit our sustainability page to learn more about our initiatives.");
    }
    if (normalizedQuery.includes("social media") || normalizedQuery.includes("follow us") || normalizedQuery.includes("social channels")) {
      responses.push("Follow us on social media for updates and promotions. Find us on Facebook, Twitter, and Instagram.");
    }
    if (normalizedQuery.includes("partnerships") || normalizedQuery.includes("collaborations") || normalizedQuery.includes("affiliates")) {
      responses.push("For partnership and collaboration inquiries, please contact us at partnerships@company123.lk.");
    }
    if (normalizedQuery.includes("press") || normalizedQuery.includes("media inquiries") || normalizedQuery.includes("press release")) {
      responses.push("For media inquiries and press releases, please contact our PR team at press@company123.lk.");
    }
    if (normalizedQuery.includes("careers") || normalizedQuery.includes("jobs") || normalizedQuery.includes("employment")) {
      responses.push("Explore career opportunities and current job openings on our careers page. Join our team and grow with us.");
    }
    if (normalizedQuery.includes("internships") || normalizedQuery.includes("intern program") || normalizedQuery.includes("student programs")) {
      responses.push("We offer internships and student programs. Visit our internship page for more information on how to apply.");
    }
    if (normalizedQuery.includes("event") || normalizedQuery.includes("upcoming events") || normalizedQuery.includes("events calendar")) {
      responses.push("Check out our events calendar on the website to stay updated on upcoming events and activities.");
    }
    if (normalizedQuery.includes("seminars") || normalizedQuery.includes("workshops") || normalizedQuery.includes("training sessions")) {
      responses.push("We host seminars, workshops, and training sessions. Visit our events page for more details and registration information.");
    }
    if (normalizedQuery.includes("product development") || normalizedQuery.includes("innovation") || normalizedQuery.includes("new products")) {
      responses.push("Stay tuned for new product developments and innovations. Follow us for updates on our latest products and advancements.");
    }
    if (normalizedQuery.includes("customization") || normalizedQuery.includes("personalization") || normalizedQuery.includes("tailor-made")) {
      responses.push("We offer customization and personalization options. Visit our customization page or contact us for more details.");
    }
    if (normalizedQuery.includes("product availability") || normalizedQuery.includes("stock levels") || normalizedQuery.includes("in-stock items")) {
      responses.push("Check product availability and stock levels on our website. Items may be restocked soon if they are currently out of stock.");
    }
    if (normalizedQuery.includes("local pickup") || normalizedQuery.includes("pickup options") || normalizedQuery.includes("store pickup")) {
      responses.push("We offer local pickup options. Select 'store pickup' at checkout and choose a convenient time to collect your order from our store.");
    }
    if (normalizedQuery.includes("order cancellation") || normalizedQuery.includes("cancel order") || normalizedQuery.includes("order change")) {
      responses.push("To cancel or change your order, please contact us as soon as possible. Refer to our cancellation policy for more details.");
    }
    if (normalizedQuery.includes("gift wrapping") || normalizedQuery.includes("gift options") || normalizedQuery.includes("wrapping services")) {
      responses.push("Gift wrapping services are available. Select the gift wrapping option at checkout and include a personalized message if desired.");
    }
    if (normalizedQuery.includes("product recommendations") || normalizedQuery.includes("suggestions") || normalizedQuery.includes("similar items")) {
      responses.push("Based on your interests, we recommend checking out similar items on our website. Visit our recommendations page for more suggestions.");
    }
    if (normalizedQuery.includes("contact hours") || normalizedQuery.includes("business hours") || normalizedQuery.includes("available hours")) {
      responses.push("Our business hours are Monday to Friday, 9 AM to 6 PM, and Saturdays from 10 AM to 4 PM.");
    }
    if (normalizedQuery.includes("return process") || normalizedQuery.includes("how to return") || normalizedQuery.includes("return instructions")) {
      responses.push("Follow the instructions on our returns page to process a return. You will need the order number and reason for return.");
    }
    if (normalizedQuery.includes("customer service") || normalizedQuery.includes("support team") || normalizedQuery.includes("contact support")) {
      responses.push("For any customer service inquiries, please contact our support team at support@company123.lk or call us at +94 123 456 789.");
    }
    if (normalizedQuery.includes("new arrivals") || normalizedQuery.includes("latest products") || normalizedQuery.includes("recently added")) {
      responses.push("Check out our new arrivals and latest products on our website. Visit the 'New Arrivals' section for the most recent additions.");
    }
    if (normalizedQuery.includes("bulk discounts") || normalizedQuery.includes("wholesale rates") || normalizedQuery.includes("volume discounts")) {
      responses.push("Bulk discounts and wholesale rates are available. Contact us directly for pricing and more details on bulk orders.");
    }
    if (normalizedQuery.includes("gift suggestions") || normalizedQuery.includes("present ideas") || normalizedQuery.includes("gifts")) {
      responses.push("Looking for gift ideas? Check out our gift suggestions page for popular gifts and personalized options.");
    }
    if (normalizedQuery.includes("loyalty rewards") || normalizedQuery.includes("rewards program") || normalizedQuery.includes("membership benefits")) {
      responses.push("Our loyalty rewards program offers points and benefits for regular customers. Visit our rewards page to learn more about the benefits of membership.");
    }
    if (normalizedQuery.includes("order history") || normalizedQuery.includes("previous orders") || normalizedQuery.includes("order records")) {
      responses.push("You can view your order history by logging into your account on our website. Check previous orders and track current orders from there.");
    }
    if (normalizedQuery.includes("customer feedback") || normalizedQuery.includes("reviews") || normalizedQuery.includes("user experiences")) {
      responses.push("We value customer feedback. Please leave a review on our website or send your comments to feedback@company123.lk.");
    }
    if (normalizedQuery.includes("payment security") || normalizedQuery.includes("secure transactions") || normalizedQuery.includes("payment protection")) {
      responses.push("Our payment system is secure, utilizing encryption and advanced security measures to protect your transaction data.");
    }
    if (normalizedQuery.includes("delivery times") || normalizedQuery.includes("shipping duration") || normalizedQuery.includes("how long does delivery take")) {
      responses.push("Delivery times depend on your location. Orders typically ship within 2-3 business days. Check our shipping policy for specific timeframes.");
    }
    if (normalizedQuery.includes("in-store events") || normalizedQuery.includes("local events") || normalizedQuery.includes("store activities")) {
      responses.push("Stay updated on in-store events and activities by visiting our events page or subscribing to our newsletter.");
    }
    if (normalizedQuery.includes("online support") || normalizedQuery.includes("web support") || normalizedQuery.includes("help online")) {
      responses.push("For online support, please visit our support page or use our live chat feature for immediate assistance.");
    }
    if (normalizedQuery.includes("product warranty") || normalizedQuery.includes("warranty policy") || normalizedQuery.includes("guarantee")) {
      responses.push("Product warranty details are available on our warranty policy page. Review the warranty terms and conditions for more information.");
    }
    if (normalizedQuery.includes("order tracking") || normalizedQuery.includes("track my order") || normalizedQuery.includes("shipment status")) {
      responses.push("Track your order status by logging into your account on our website or using the tracking link provided in your order confirmation email.");
    }
    if (normalizedQuery.includes("referrals") || normalizedQuery.includes("refer a friend") || normalizedQuery.includes("referral program")) {
      responses.push("Participate in our referral program to earn rewards by referring friends and family. Check our referral page for more details.");
    }
    if (normalizedQuery.includes("product availability") || normalizedQuery.includes("out of stock") || normalizedQuery.includes("restock") || normalizedQuery.includes("inventory") || normalizedQuery.includes("stock status")) {
      responses.push("Check product availability and stock status on our website. Items may be restocked soon if they are currently out of stock.");
    }
    if (normalizedQuery.includes("product returns") || normalizedQuery.includes("return policy") || normalizedQuery.includes("return process")) {
      responses.push("For information on our return policy and process, please visit our returns page. Follow the steps to return a product.");
    }
    if (normalizedQuery.includes("product exchanges") || normalizedQuery.includes("exchange policy") || normalizedQuery.includes("how to exchange")) {
      responses.push("To exchange a product, visit our exchange policy page for instructions and conditions. Contact customer service if you need further assistance.");
    }
    if (normalizedQuery.includes("international shipping") || normalizedQuery.includes("ship abroad") || normalizedQuery.includes("global shipping")) {
      responses.push("We offer international shipping. Check our shipping policy for details on delivery times and costs for international orders.");
    }
    if (normalizedQuery.includes("bulk orders") || normalizedQuery.includes("wholesale orders") || normalizedQuery.includes("large quantity orders")) {
      responses.push("For bulk and wholesale orders, contact us directly for pricing and availability. Visit our bulk orders page for more details.");
    }
    if (normalizedQuery.includes("product recalls") || normalizedQuery.includes("recall information") || normalizedQuery.includes("safety recalls")) {
      responses.push("Stay informed about any product recalls or safety alerts by checking our recall information page on the website.");
    }
    if (normalizedQuery.includes("order modifications") || normalizedQuery.includes("change an order") || normalizedQuery.includes("modify order")) {
      responses.push("To modify an order, please contact us as soon as possible. Refer to our order modification policy for more details.");
    }
    if (normalizedQuery.includes("order status") || normalizedQuery.includes("current order status") || normalizedQuery.includes("order updates")) {
      responses.push("Check the status of your current order by logging into your account or using the tracking link provided in your order confirmation email.");
    }
    if (normalizedQuery.includes("returns policy") || normalizedQuery.includes("return guidelines") || normalizedQuery.includes("how to return")) {
      responses.push("Review our returns policy and guidelines on our website. Follow the outlined steps for returning a product.");
    }
    if (normalizedQuery.includes("delivery options") || normalizedQuery.includes("shipping methods") || normalizedQuery.includes("delivery choices")) {
      responses.push("We offer various delivery options. Review our delivery choices and select the best option for your needs during checkout.");
    }
    if (normalizedQuery.includes("product reviews") || normalizedQuery.includes("customer reviews") || normalizedQuery.includes("feedback on products")) {
      responses.push("Read customer reviews and feedback on our website to make informed decisions about our products.");
    }
    if (normalizedQuery.includes("discount codes") || normalizedQuery.includes("promo codes") || normalizedQuery.includes("coupon codes")) {
      responses.push("Apply discount codes or promo codes at checkout to receive special offers. Check our promotions page for current codes and offers.");
    }
    if (normalizedQuery.includes("payment options") || normalizedQuery.includes("accepted payments") || normalizedQuery.includes("payment methods")) {
      responses.push("We accept various payment options including credit/debit cards and online payment systems. Visit our payment options page for more details.");
    }
    if (normalizedQuery.includes("gift ideas") || normalizedQuery.includes("present suggestions") || normalizedQuery.includes("gifts for loved ones")) {
      responses.push("Find great gift ideas and present suggestions on our website. Visit our gift ideas page for popular and personalized options.");
    }
    if (normalizedQuery.includes("buy online") || normalizedQuery.includes("purchase online") || normalizedQuery.includes("shop online")) {
      responses.push("You can buy products directly from our website. Browse our online store and make a purchase with ease.");
    }
    if (normalizedQuery.includes("track my shipment") || normalizedQuery.includes("shipment tracking") || normalizedQuery.includes("order tracking")) {
      responses.push("Track your shipment status by logging into your account or using the tracking link provided in your order confirmation email.");
    }
    if (normalizedQuery.includes("store hours") || normalizedQuery.includes("store timings") || normalizedQuery.includes("operating hours")) {
      responses.push("Our store hours are Monday to Friday, 9 AM to 6 PM, and Saturdays from 10 AM to 4 PM.");
    }
    if (normalizedQuery.includes("online orders") || normalizedQuery.includes("web orders") || normalizedQuery.includes("e-commerce orders")) {
      responses.push("Place online orders through our website. Browse our catalog, add items to your cart, and check out securely online.");
    }
    if (normalizedQuery.includes("discount promotions") || normalizedQuery.includes("special deals") || normalizedQuery.includes("limited time offers")) {
      responses.push("Check out our discount promotions and special deals on the website. Limited time offers are available for a short period.");
    }
    if (normalizedQuery.includes("order assistance") || normalizedQuery.includes("help with order") || normalizedQuery.includes("order support")) {
      responses.push("For assistance with your order, contact our support team at support@company123.lk or use our live chat feature on the website.");
    }
    if (normalizedQuery.includes("store policies") || normalizedQuery.includes("shop policies") || normalizedQuery.includes("store regulations")) {
      responses.push("Review our store policies and regulations on our website. This includes information on returns, exchanges, and customer service.");
    }
    if (normalizedQuery.includes("store services") || normalizedQuery.includes("services offered") || normalizedQuery.includes("store offerings")) {
      responses.push("Explore the services offered at our store. This includes in-store assistance, product recommendations, and more.");
    }
    if (normalizedQuery.includes("discounts and sales") || normalizedQuery.includes("offers") || normalizedQuery.includes("price reductions")) {
      responses.push("Stay informed about discounts and sales by subscribing to our newsletter or visiting our sales page on the website.");
    }
    if (normalizedQuery.includes("delivery areas") || normalizedQuery.includes("shipping zones") || normalizedQuery.includes("delivery locations")) {
      responses.push("We deliver to various areas. Check our delivery zones page to see if we ship to your location.");
    }
    if (normalizedQuery.includes("payment processing") || normalizedQuery.includes("secure payments") || normalizedQuery.includes("payment methods") || normalizedQuery.includes("payment security")) {
      responses.push("Our payment processing system ensures secure transactions. Review our payment methods and security measures on our payment options page.");
    }
    if (normalizedQuery.includes("custom orders") || normalizedQuery.includes("special requests") || normalizedQuery.includes("tailor-made products")) {
      responses.push("We accept custom orders and special requests. Visit our custom orders page for details and to place a custom request.");
    }
    if (normalizedQuery.includes("return and exchange policy") || normalizedQuery.includes("return/exchange process") || normalizedQuery.includes("policy on returns and exchanges")) {
      responses.push("Review our return and exchange policy on our website. Follow the outlined steps for returns or exchanges.");
    }
    if (normalizedQuery.includes("support contact") || normalizedQuery.includes("customer support contact") || normalizedQuery.includes("reach support")) {
      responses.push("Contact our customer support team for assistance via email at support@company123.lk or by calling +94 123 456 789.");
    }
    if (normalizedQuery.includes("shipping rates") || normalizedQuery.includes("delivery costs") || normalizedQuery.includes("shipping fees")) {
      responses.push("Check our shipping rates and delivery costs on our shipping policy page. Costs vary based on location and shipping method.");
    }
    if (normalizedQuery.includes("bulk purchasing") || normalizedQuery.includes("large orders") || normalizedQuery.includes("volume purchases")) {
      responses.push("For bulk purchasing and large orders, contact us directly for pricing and availability. Visit our bulk purchasing page for more details.");
    }
    if (normalizedQuery.includes("order inquiries") || normalizedQuery.includes("order questions") || normalizedQuery.includes("order information")) {
      responses.push("For inquiries about your order, contact our support team via email or phone. Refer to our contact information for more details.");
    }
    if (normalizedQuery.includes("product listings") || normalizedQuery.includes("item catalog") || normalizedQuery.includes("available products")) {
      responses.push("Browse our product listings and item catalog on our website. Find information on available products and their details.");
    }
    

    return responses.length > 0 ? responses.join(' ') : "Sorry, I couldn't find any information related to your query. Please check our website or contact support for assistance.";
};