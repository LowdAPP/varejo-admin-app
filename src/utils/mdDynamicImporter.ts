const mdDynamicImporter = async (mdPath: string, mdName: string, mdPrefixPath: string) => {
    return import(`../assets/md/${mdPrefixPath}/${mdPath}/${mdName}.md`)
}

export default mdDynamicImporter 