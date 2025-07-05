import { defineType, defineField } from "sanity";

export default defineType({
    name: "post",
    title: "Post",
    type: "document",
    fields: [
        defineField({
        name: "title",
        title: "Title",
        type: "string",
        }),
        defineField({
        name: "slug",
        title: "Slug",
        type: "slug",
        options: {
            source: "title",
            maxLength: 96,
        },
        }),
        defineField({
        name: "image",
        title: "Image",
        type:"image",
        options: {
            hotspot: true, // Enables image cropping and focal point selection
        },
        }),


        defineField({
        name: "content",
        title: "Content",
        type: "text",
        }),
        
    ],
    });