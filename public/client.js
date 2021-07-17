document.addEventListener("DOMContentLoaded", async () => {
    const response = await fetch("/data"); 
    const data = await response.json() ;
    for (const item of data.data.search.edges) {
    document.querySelector("tbody").insertAdjacentHTML(
        "beforeend",
        `
            <tr class="h-24 lg:h-16">
            <td class="px-6 border-b py-4 whitespace-no-wrap border-indigo-800 text-3xl lg:text-xs font-bold lg:text-white ">
                ${item.node.owner.login}
            </td>
            <td class="px-6 border-b py-4 whitespace-no-wrap border-indigo-800 text-3xl lg:text-xs font-bold lg:text-white ">
                ${item.node.name}
            </td>
            <td class="px-6 border-b py-4 whitespace-no-wrap border-indigo-800 text-3xl lg:text-xs font-bold lg:text-white ">
                ${item.node.stargazers.totalCount}
            </td>
            </tr>
        `
    )
}
})