import { defineField, defineType}  from "sanity";

export const productCategory = defineType({
  name:"productCategory",
  title:"Product Categoty",
  type:"document",
  fields:[
    defineField(
      {
        name:"title",
        title:"Title",
        type:"string"
      }
    ),
    defineField({
      name:"description",
      title:"Description",
      type:"text"
    }),
    defineField({
      name:'slug',
      title:"Slug",
      type:"slug"
    })
    
  ]
})