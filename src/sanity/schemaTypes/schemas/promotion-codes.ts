import { defineField, defineType}  from "sanity";

export const promotionCode = defineType({
  name:"promotionCode",
  title:"Promotion Code ",
  type:"document",
  fields:[
    defineField(
      {
        name:"code",
        title:"Code",
        type:"string"
      }
    ),
    defineField({
      name:"discountPercentage",
      title:"Discount Percentage (%)",
      type:"text"
    }),
    defineField({
      name:'slug',
      title:"Slug",
      type:"slug"
    }),
    defineField({
      name:"expirationDate",
      title:"Expiration Date",
      type:"date"
    })
    
  ]
})