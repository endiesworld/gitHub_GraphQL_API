document.addEventListener("DOMContentLoaded", async () => {
    const response = await fetch("/data"); 
    const data = await response.json() ;
    for (const item of data.data.search.edges) {
    document.querySelector("tbody").insertAdjacentHTML(
        "beforeend",
        `
            <tr>
            <td class="px-6 border-b py-4 whitespace-no-wrap font-black border-indigo-800 text-sm leading-5 font-medium text-white">
                ${item.node.owner.login}
            </td>
            <td class="px-6 border-b py-4 whitespace-no-wrap border-indigo-800 text-sm leading-5 text-white">
                ${item.node.name}
            </td>
            <td class="px-6 border-b py-4 whitespace-no-wrap border-indigo-800 text-sm leading-5 text-white">
                ${item.node.stargazers.totalCount}
            </td>
            </tr>
        `
    )
}
})