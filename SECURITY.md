# GitHub CLI api
# https://cli.github.com/manual/gh_api

gh api \
  --method DELETE \
  -H "Accept: application/vnd.github+json" \
  -H "X-GitHub-Api-Version: 2026-03-10" \
  /enterprises/ENTERPRISE/copilot/policies/coding_agent/organizations \
  --input - <<< '{
  "organizations": [
    "my-org-1",
    "my-org-2"
  ],
  "custom_properties": [
    {
      "property_name": "department",
      "values": [
        "engineering",
        "security"
      ]
    }
  ]
}'
