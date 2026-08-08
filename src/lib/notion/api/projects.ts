import notion from "@/lib/notion/notion"

export type Project = {
    name: string
}

export const getProjects = async () => {

    const response = await notion.dataSources.query({
        data_source_id: "346ece45-a81f-80e3-8406-000b4dff2e4a",
    })

    let projects: Project[] = []

    for (const item of response.results) {
        if (item.object !== "page" || !("properties" in item)) continue;

        // Replace "Name" with your data source's title-property name
        const nameProperty = item.properties["Name"];

        if (nameProperty?.type === "title") {
            const name = nameProperty.title
                .map(text => text.plain_text)
                .join("");

            projects.push({ name });
        }
    }

    return projects;
}