### Fixed

- A won or lost deal's `closed_date` is the day it entered that stage in Attio. It was the day of the first sync that
  saw it closed, so a filter such as `closed:>=90d` counted every deal won before you installed `attio`.
