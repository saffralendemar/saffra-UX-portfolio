# Unused export assets

These images were shipped with the original Claude Design export but were never rendered:
the export declares them (`imgImage`, `imgImage1`, `imgEdgeShine`, `imgEdgeShine1`,
`imgEdgeShine3` in the iPhone mockup components) yet the components that would use them
return `null`. They are kept here so no asset from the export is lost, and are not imported
anywhere, so they are not part of the production build.
