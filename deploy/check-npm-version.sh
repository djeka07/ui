#! bin/bash

PACKAGE_NAME=$1
SHOULD_PUBLISH=false
IS_RC=false
PACKAGE_VERSION=$(npm pkg get version | sed -e 's/^"//' -e 's/"$//')
NPM_VERSION=$(npm view "$PACKAGE_NAME@$PACKAGE_VERSION" version)

echo "$PACKAGE_VERSION $NPM_VERSION"

if [ "$PACKAGE_VERSION" != "$NPM_VERSION" ]; then
  SHOULD_PUBLISH=true
fi

if [[ "$PACKAGE_VERSION" =~ "rc" ]]; then
  IS_RC=true
fi

echo "##vso[task.setvariable variable=SHOULD_PUBLISH;]$SHOULD_PUBLISH"
echo "##vso[task.setvariable variable=IS_RC;]$IS_RC"