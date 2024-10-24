#! bin/bash

SHOULD_PUBLISH=false
PACKAGE_VERSION=$(npm pkg get version | sed -e 's/^"//' -e 's/"$//') 
NPM_VERSION="$(npm view @djeka07/ui version)"

echo "$PACKAGE_VERSION $NPM_VERSION"

if [ "$PACKAGE_VERSION" != "$NPM_VERSION" ]; then
  SHOULD_PUBLISH=true
fi

echo "##vso[task.setvariable variable=SHOULD_PUBLISH;]$SHOULD_PUBLISH"