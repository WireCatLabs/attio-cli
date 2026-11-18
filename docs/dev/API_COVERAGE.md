<!--
GENERATED. DO NOT EDIT.
Source: spec/attio/, checked against provenance.json
Run: pnpm generate
-->

# API coverage

108 operations from openapi 2.0.0.

| Operation | Call | Command | Effect | Request source | Status | Summary |
|---|---|---|---|---|---|---|
| `getV2Objects` | `GET /v2/objects` | `attio <profile> api objects-list` | read | — | generated | List objects |
| `postV2Objects` | `POST /v2/objects` | `attio <profile> api objects-create` | write | contract | generated | Create an object |
| `getV2ObjectsByObject` | `GET /v2/objects/{object}` | `attio <profile> api objects-get` | read | — | generated | Get an object |
| `patchV2ObjectsByObject` | `PATCH /v2/objects/{object}` | `attio <profile> api objects-update` | write | contract | generated | Update an object |
| `deleteV2ObjectsByObject` | `DELETE /v2/objects/{object}` | `attio <profile> api objects-delete` | destructive | — | generated | Delete an object |
| `getV2ObjectsByObjectViews` | `GET /v2/objects/{object}/views` | `attio <profile> api objects-views-list` | read | — | generated | List views for object |
| `postV2ObjectsByObjectViews` | `POST /v2/objects/{object}/views` | `attio <profile> api objects-views-create` | write | contract | generated | Create an object view |
| `getV2ObjectsByObjectViewsByViewId` | `GET /v2/objects/{object}/views/{view_id}` | `attio <profile> api objects-views-get` | read | — | generated | Get an object view |
| `patchV2ObjectsByObjectViewsByViewId` | `PATCH /v2/objects/{object}/views/{view_id}` | `attio <profile> api objects-views-update` | write | contract | generated | Update an object view |
| `deleteV2ObjectsByObjectViewsByViewId` | `DELETE /v2/objects/{object}/views/{view_id}` | `attio <profile> api objects-views-delete` | destructive | — | generated | Delete an object view |
| `getV2Activities` | `GET /v2/activities` | `attio <profile> api activities-list` | read | — | generated | List activities |
| `postV2Activities` | `POST /v2/activities` | `attio <profile> api activities-create` | write | contract | generated | Create an activity |
| `getV2ActivitiesByActivity` | `GET /v2/activities/{activity}` | `attio <profile> api activities-get` | read | — | generated | Get an activity |
| `patchV2ActivitiesByActivity` | `PATCH /v2/activities/{activity}` | `attio <profile> api activities-update` | write | contract | generated | Update an activity |
| `deleteV2ActivitiesByActivity` | `DELETE /v2/activities/{activity}` | `attio <profile> api activities-delete` | destructive | — | generated | Delete an activity |
| `getV2ByTargetByIdentifierAttributes` | `GET /v2/{target}/{identifier}/attributes` | `attio <profile> api attributes-list` | read | — | generated | List attributes |
| `postV2ByTargetByIdentifierAttributes` | `POST /v2/{target}/{identifier}/attributes` | `attio <profile> api attributes-create` | write | contract | generated | Create an attribute |
| `getV2ByTargetByIdentifierAttributesByAttribute` | `GET /v2/{target}/{identifier}/attributes/{attribute}` | `attio <profile> api attributes-get` | read | — | generated | Get an attribute |
| `patchV2ByTargetByIdentifierAttributesByAttribute` | `PATCH /v2/{target}/{identifier}/attributes/{attribute}` | `attio <profile> api attributes-update` | write | contract | generated | Update an attribute |
| `getV2ByTargetByIdentifierAttributesByAttributeOptions` | `GET /v2/{target}/{identifier}/attributes/{attribute}/options` | `attio <profile> api attributes-options-list` | read | — | generated | List select options |
| `postV2ByTargetByIdentifierAttributesByAttributeOptions` | `POST /v2/{target}/{identifier}/attributes/{attribute}/options` | `attio <profile> api attributes-options-create` | write | contract | generated | Create a select option |
| `patchV2ByTargetByIdentifierAttributesByAttributeOptionsByOption` | `PATCH /v2/{target}/{identifier}/attributes/{attribute}/options/{option}` | `attio <profile> api attributes-options-update` | write | contract | generated | Update a select option |
| `getV2ByTargetByIdentifierAttributesByAttributeStatuses` | `GET /v2/{target}/{identifier}/attributes/{attribute}/statuses` | `attio <profile> api attributes-statuses-list` | read | — | generated | List statuses |
| `postV2ByTargetByIdentifierAttributesByAttributeStatuses` | `POST /v2/{target}/{identifier}/attributes/{attribute}/statuses` | `attio <profile> api attributes-statuses-create` | write | contract | generated | Create a status |
| `patchV2ByTargetByIdentifierAttributesByAttributeStatusesByStatus` | `PATCH /v2/{target}/{identifier}/attributes/{attribute}/statuses/{status}` | `attio <profile> api attributes-statuses-update` | write | contract | generated | Update a status |
| `postV2ObjectsByObjectRecordsQuery` | `POST /v2/objects/{object}/records/query` | `attio <profile> api objects-records-query` | read | contract | generated | List records |
| `postV2ObjectsByObjectRecords` | `POST /v2/objects/{object}/records` | `attio <profile> api objects-records-create` | write | contract | generated | Create a record |
| `putV2ObjectsByObjectRecords` | `PUT /v2/objects/{object}/records` | `attio <profile> api objects-records-upsert` | write | contract | generated | Upsert a record |
| `getV2ObjectsByObjectRecordsByRecordId` | `GET /v2/objects/{object}/records/{record_id}` | `attio <profile> api objects-records-get` | read | — | generated | Get a record |
| `putV2ObjectsByObjectRecordsByRecordId` | `PUT /v2/objects/{object}/records/{record_id}` | `attio <profile> api objects-records-replace` | write | contract | generated | Update a record (overwrite multiselect values) |
| `patchV2ObjectsByObjectRecordsByRecordId` | `PATCH /v2/objects/{object}/records/{record_id}` | `attio <profile> api objects-records-update` | write | contract | generated | Update a record (append multiselect values) |
| `deleteV2ObjectsByObjectRecordsByRecordId` | `DELETE /v2/objects/{object}/records/{record_id}` | `attio <profile> api objects-records-delete` | destructive | — | generated | Delete a record |
| `postV2ObjectsByObjectRecordsMerge` | `POST /v2/objects/{object}/records/merge` | `attio <profile> api objects-records-merge` | write | contract | generated | Merge two records |
| `getV2ObjectsByObjectRecordsByRecordIdAttributesByAttributeValues` | `GET /v2/objects/{object}/records/{record_id}/attributes/{attribute}/values` | `attio <profile> api objects-records-attributes-values-list` | read | — | generated | List record attribute values |
| `putV2ObjectsByObjectRecordsByRecordIdAttributesByAttributeValues` | `PUT /v2/objects/{object}/records/{record_id}/attributes/{attribute}/values` | `attio <profile> api objects-records-attributes-values-replace` | write | contract | generated | Write record attribute values |
| `getV2ObjectsByObjectRecordsByRecordIdEntries` | `GET /v2/objects/{object}/records/{record_id}/entries` | `attio <profile> api objects-records-entries-list` | read | — | generated | List record entries |
| `postV2ObjectsRecordsSearch` | `POST /v2/objects/records/search` | `attio <profile> api objects-records-search` | read | contract | generated | Search records |
| `postV2ActivitiesByActivityRecordsQuery` | `POST /v2/activities/{activity}/records/query` | `attio <profile> api activities-records-query` | read | contract | generated | List activity records |
| `postV2ActivitiesByActivityRecords` | `POST /v2/activities/{activity}/records` | `attio <profile> api activities-records-create` | write | contract | generated | Create an activity record |
| `putV2ActivitiesByActivityRecords` | `PUT /v2/activities/{activity}/records` | `attio <profile> api activities-records-upsert` | write | contract | generated | Upsert an activity record |
| `getV2ActivitiesByActivityRecordsByRecordId` | `GET /v2/activities/{activity}/records/{record_id}` | `attio <profile> api activities-records-get` | read | — | generated | Get an activity record |
| `putV2ActivitiesByActivityRecordsByRecordId` | `PUT /v2/activities/{activity}/records/{record_id}` | `attio <profile> api activities-records-replace` | write | contract | generated | Update an activity record (overwrite multiselect values) |
| `patchV2ActivitiesByActivityRecordsByRecordId` | `PATCH /v2/activities/{activity}/records/{record_id}` | `attio <profile> api activities-records-update` | write | contract | generated | Update an activity record (append multiselect values) |
| `deleteV2ActivitiesByActivityRecordsByRecordId` | `DELETE /v2/activities/{activity}/records/{record_id}` | `attio <profile> api activities-records-delete` | destructive | — | generated | Delete an activity record |
| `postV2Sql` | `POST /v2/sql` | `attio <profile> api sql` | write | contract | generated | Query SQL |
| `getV2Lists` | `GET /v2/lists` | `attio <profile> api lists-list` | read | — | generated | List all lists |
| `postV2Lists` | `POST /v2/lists` | `attio <profile> api lists-create` | write | contract | generated | Create a list |
| `getV2ListsByList` | `GET /v2/lists/{list}` | `attio <profile> api lists-get` | read | — | generated | Get a list |
| `patchV2ListsByList` | `PATCH /v2/lists/{list}` | `attio <profile> api lists-update` | write | contract | generated | Update a list |
| `getV2ListsByListViews` | `GET /v2/lists/{list}/views` | `attio <profile> api lists-views-list` | read | — | generated | List views for list |
| `postV2ListsByListViews` | `POST /v2/lists/{list}/views` | `attio <profile> api lists-views-create` | write | contract | generated | Create a list view |
| `getV2ListsByListViewsByViewId` | `GET /v2/lists/{list}/views/{view_id}` | `attio <profile> api lists-views-get` | read | — | generated | Get a list view |
| `patchV2ListsByListViewsByViewId` | `PATCH /v2/lists/{list}/views/{view_id}` | `attio <profile> api lists-views-update` | write | contract | generated | Update a list view |
| `deleteV2ListsByListViewsByViewId` | `DELETE /v2/lists/{list}/views/{view_id}` | `attio <profile> api lists-views-delete` | destructive | — | generated | Delete a list view |
| `postV2ListsByListEntriesQuery` | `POST /v2/lists/{list}/entries/query` | `attio <profile> api lists-entries-query` | read | contract | generated | List entries |
| `postV2ListsByListEntries` | `POST /v2/lists/{list}/entries` | `attio <profile> api lists-entries-create` | write | contract | generated | Create an entry (add record to list) |
| `putV2ListsByListEntries` | `PUT /v2/lists/{list}/entries` | `attio <profile> api lists-entries-upsert` | write | contract | generated | Upsert a list entry by parent |
| `getV2ListsByListEntriesByEntryId` | `GET /v2/lists/{list}/entries/{entry_id}` | `attio <profile> api lists-entries-get` | read | — | generated | Get a list entry |
| `putV2ListsByListEntriesByEntryId` | `PUT /v2/lists/{list}/entries/{entry_id}` | `attio <profile> api lists-entries-replace` | write | contract | generated | Update a list entry (overwrite multiselect values) |
| `patchV2ListsByListEntriesByEntryId` | `PATCH /v2/lists/{list}/entries/{entry_id}` | `attio <profile> api lists-entries-update` | write | contract | generated | Update a list entry (append multiselect values) |
| `deleteV2ListsByListEntriesByEntryId` | `DELETE /v2/lists/{list}/entries/{entry_id}` | `attio <profile> api lists-entries-delete` | destructive | — | generated | Delete a list entry |
| `getV2ListsByListEntriesByEntryIdAttributesByAttributeValues` | `GET /v2/lists/{list}/entries/{entry_id}/attributes/{attribute}/values` | `attio <profile> api lists-entries-attributes-values-list` | read | — | generated | List attribute values for a list entry |
| `putV2ListsByListEntriesByEntryIdAttributesByAttributeValues` | `PUT /v2/lists/{list}/entries/{entry_id}/attributes/{attribute}/values` | `attio <profile> api lists-entries-attributes-values-replace` | write | contract | generated | Write list entry attribute values |
| `getV2WorkspaceMembers` | `GET /v2/workspace_members` | `attio <profile> api workspace-members-list` | read | — | generated | List workspace members |
| `getV2WorkspaceMembersByWorkspaceMemberId` | `GET /v2/workspace_members/{workspace_member_id}` | `attio <profile> api workspace-members-get` | read | — | generated | Get a workspace member |
| `getV2Notes` | `GET /v2/notes` | `attio <profile> api notes-list` | read | — | generated | List notes |
| `postV2Notes` | `POST /v2/notes` | `attio <profile> api notes-create` | write | contract | generated | Create a note |
| `getV2NotesByNoteId` | `GET /v2/notes/{note_id}` | `attio <profile> api notes-get` | read | — | generated | Get a note |
| `patchV2NotesByNoteId` | `PATCH /v2/notes/{note_id}` | `attio <profile> api notes-update` | write | contract | generated | Update a note |
| `deleteV2NotesByNoteId` | `DELETE /v2/notes/{note_id}` | `attio <profile> api notes-delete` | destructive | — | generated | Delete a note |
| `getV2Tasks` | `GET /v2/tasks` | `attio <profile> api tasks-list` | read | — | generated | List tasks |
| `postV2Tasks` | `POST /v2/tasks` | `attio <profile> api tasks-create` | write | contract | generated | Create a task |
| `getV2TasksByTaskId` | `GET /v2/tasks/{task_id}` | `attio <profile> api tasks-get` | read | — | generated | Get a task |
| `patchV2TasksByTaskId` | `PATCH /v2/tasks/{task_id}` | `attio <profile> api tasks-update` | write | contract | generated | Update a task |
| `deleteV2TasksByTaskId` | `DELETE /v2/tasks/{task_id}` | `attio <profile> api tasks-delete` | destructive | — | generated | Delete a task |
| `getV2Threads` | `GET /v2/threads` | `attio <profile> api threads-list` | read | — | generated | List threads |
| `getV2ThreadsByThreadId` | `GET /v2/threads/{thread_id}` | `attio <profile> api threads-get` | read | — | generated | Get a thread and its comments |
| `postV2Comments` | `POST /v2/comments` | `attio <profile> api comments-create` | write | contract | generated | Create a comment |
| `getV2CommentsByCommentId` | `GET /v2/comments/{comment_id}` | `attio <profile> api comments-get` | read | — | generated | Get a comment |
| `deleteV2CommentsByCommentId` | `DELETE /v2/comments/{comment_id}` | `attio <profile> api comments-delete` | destructive | — | generated | Delete a comment |
| `getV2Emails` | `GET /v2/emails` | `attio <profile> api emails-list` | read | — | generated | List emails |
| `postV2SequencesUnsubscribedEmails` | `POST /v2/sequences/unsubscribed_emails` | `attio <profile> api sequences-unsubscribed-emails` | write | contract | generated | Add emails to the unsubscribe list |
| `getV2WorkspaceBlocklistAddresses` | `GET /v2/workspace_blocklist_addresses` | `attio <profile> api workspace-blocklist-addresses-list` | read | — | generated | List workspace blocklist addresses |
| `putV2WorkspaceBlocklistAddresses` | `PUT /v2/workspace_blocklist_addresses` | `attio <profile> api workspace-blocklist-addresses-replace` | write | contract | generated | Add or update workspace blocklist addresses |
| `deleteV2WorkspaceBlocklistAddressesByAddress` | `DELETE /v2/workspace_blocklist_addresses/{address}` | `attio <profile> api workspace-blocklist-addresses-delete` | destructive | — | generated | Delete a workspace blocklist address |
| `getV2Meetings` | `GET /v2/meetings` | `attio <profile> api meetings-list` | read | — | generated | List meetings |
| `postV2Meetings` | `POST /v2/meetings` | `attio <profile> api meetings-create` | write | contract | generated | Create a meeting |
| `getV2MeetingsByMeetingId` | `GET /v2/meetings/{meeting_id}` | `attio <profile> api meetings-get` | read | — | generated | Get a meeting |
| `putV2MeetingsByMeetingId` | `PUT /v2/meetings/{meeting_id}` | `attio <profile> api meetings-replace` | write | contract | generated | Update a meeting (overwrite linked records) |
| `patchV2MeetingsByMeetingId` | `PATCH /v2/meetings/{meeting_id}` | `attio <profile> api meetings-update` | write | contract | generated | Update a meeting (append linked records) |
| `deleteV2MeetingsByMeetingId` | `DELETE /v2/meetings/{meeting_id}` | `attio <profile> api meetings-delete` | destructive | — | generated | Delete a meeting |
| `getV2MeetingsByMeetingIdCallRecordings` | `GET /v2/meetings/{meeting_id}/call_recordings` | `attio <profile> api meetings-call-recordings-list` | read | — | generated | List call recordings |
| `postV2MeetingsByMeetingIdCallRecordings` | `POST /v2/meetings/{meeting_id}/call_recordings` | `attio <profile> api meetings-call-recordings-create` | write | contract | generated | Create call recording |
| `getV2MeetingsByMeetingIdCallRecordingsByCallRecordingId` | `GET /v2/meetings/{meeting_id}/call_recordings/{call_recording_id}` | `attio <profile> api meetings-call-recordings-get` | read | — | generated | Get call recording |
| `deleteV2MeetingsByMeetingIdCallRecordingsByCallRecordingId` | `DELETE /v2/meetings/{meeting_id}/call_recordings/{call_recording_id}` | `attio <profile> api meetings-call-recordings-delete` | destructive | — | generated | Delete call recording |
| `getV2MeetingsByMeetingIdCallRecordingsByCallRecordingIdTranscript` | `GET /v2/meetings/{meeting_id}/call_recordings/{call_recording_id}/transcript` | `attio <profile> api meetings-call-recordings-transcript-list` | read | — | generated | Deprecated: Get call transcript |
| `getV2Files` | `GET /v2/files` | `attio <profile> api files-list` | read | — | generated | List files |
| `postV2Files` | `POST /v2/files` | `attio <profile> api files-create` | write | contract | generated | Create a folder |
| `postV2FilesUpload` | `POST /v2/files/upload` | `attio <profile> api files-upload` | write | contract | generated | Upload a file |
| `getV2FilesByFileId` | `GET /v2/files/{file_id}` | `attio <profile> api files-get` | read | — | generated | Get a file |
| `deleteV2FilesByFileId` | `DELETE /v2/files/{file_id}` | `attio <profile> api files-delete` | destructive | — | generated | Delete a file |
| `getV2FilesByFileIdDownload` | `GET /v2/files/{file_id}/download` | `attio <profile> api files-download-list` | read | — | generated | Download a file |
| `getV2Webhooks` | `GET /v2/webhooks` | `attio <profile> api webhooks-list` | read | — | generated | List webhooks |
| `postV2Webhooks` | `POST /v2/webhooks` | `attio <profile> api webhooks-create` | write | contract | generated | Create a webhook |
| `getV2WebhooksByWebhookId` | `GET /v2/webhooks/{webhook_id}` | `attio <profile> api webhooks-get` | read | — | generated | Get a webhook |
| `patchV2WebhooksByWebhookId` | `PATCH /v2/webhooks/{webhook_id}` | `attio <profile> api webhooks-update` | write | contract | generated | Update a webhook |
| `deleteV2WebhooksByWebhookId` | `DELETE /v2/webhooks/{webhook_id}` | `attio <profile> api webhooks-delete` | destructive | — | generated | Delete a webhook |
| `getV2Self` | `GET /v2/self` | `attio <profile> api self-list` | read | — | generated | Identify |

## Effects not taken from the HTTP method

| Operation | Effect | Why |
|---|---|---|
| `postV2ObjectsByObjectRecordsQuery` | read | a POST to a …/search or …/query path only reads (readingPosts rule) |
| `postV2ObjectsRecordsSearch` | read | a POST to a …/search or …/query path only reads (readingPosts rule) |
| `postV2ActivitiesByActivityRecordsQuery` | read | a POST to a …/search or …/query path only reads (readingPosts rule) |
| `postV2ListsByListEntriesQuery` | read | a POST to a …/search or …/query path only reads (readingPosts rule) |

## Pagination

| Operation | Style | Request | Answer | Source |
|---|---|---|---|---|
| `getV2ObjectsByObjectViews` | cursor | query `cursor`, query `limit` | next `pagination.next_cursor`, items `data` | detected |
| `getV2Activities` | cursor | query `cursor`, query `limit` | next `pagination.next_cursor`, items `data` | detected |
| `getV2ByTargetByIdentifierAttributes` | offset | query `offset`, query `limit` | items `data` | detected |
| `postV2ObjectsByObjectRecordsQuery` | offset | body `offset`, body `limit` | items `data` | detected |
| `getV2ObjectsByObjectRecordsByRecordIdAttributesByAttributeValues` | offset | query `offset`, query `limit` | items `data` | detected |
| `getV2ObjectsByObjectRecordsByRecordIdEntries` | offset | query `offset`, query `limit` | items `data` | detected |
| `postV2ActivitiesByActivityRecordsQuery` | offset | body `offset`, body `limit` | items `data` | detected |
| `getV2ListsByListViews` | cursor | query `cursor`, query `limit` | next `pagination.next_cursor`, items `data` | detected |
| `postV2ListsByListEntriesQuery` | offset | body `offset`, body `limit` | items `data` | detected |
| `getV2ListsByListEntriesByEntryIdAttributesByAttributeValues` | offset | query `offset`, query `limit` | items `data` | detected |
| `getV2Notes` | offset | query `offset`, query `limit` | items `data` | detected |
| `getV2Tasks` | offset | query `offset`, query `limit` | items `data` | detected |
| `getV2Threads` | offset | query `offset`, query `limit` | items `data` | detected |
| `getV2ThreadsByThreadId` | cursor | query `cursor`, query `limit` | next `pagination.next_cursor` | detected |
| `getV2Emails` | cursor | query `cursor`, query `limit` | next `pagination.next_cursor`, items `data` | detected |
| `getV2WorkspaceBlocklistAddresses` | cursor | query `cursor`, query `limit` | next `pagination.next_cursor`, items `data` | detected |
| `getV2Meetings` | cursor | query `cursor`, query `limit` | next `pagination.next_cursor`, items `data` | detected |
| `getV2MeetingsByMeetingIdCallRecordings` | cursor | query `cursor`, query `limit` | next `pagination.next_cursor`, items `data` | detected |
| `getV2MeetingsByMeetingIdCallRecordingsByCallRecordingIdTranscript` | cursor | query `cursor` | next `pagination.next_cursor` | detected |
| `getV2Files` | cursor | query `cursor`, query `limit` | next `pagination.next_cursor`, items `data` | detected |
| `getV2Webhooks` | offset | query `offset`, query `limit` | items `data` | detected |

## Permission keys

| Operation | Key | When |
|---|---|---|
| `deleteV2ObjectsByObject` | `attio.delete` | always |
| `deleteV2ObjectsByObjectViewsByViewId` | `attio.delete` | always |
| `deleteV2ActivitiesByActivity` | `attio.delete` | always |
| `deleteV2ObjectsByObjectRecordsByRecordId` | `attio.delete` | always |
| `deleteV2ActivitiesByActivityRecordsByRecordId` | `attio.delete` | always |
| `deleteV2ListsByListViewsByViewId` | `attio.delete` | always |
| `deleteV2ListsByListEntriesByEntryId` | `attio.delete` | always |
| `deleteV2NotesByNoteId` | `attio.delete` | always |
| `deleteV2TasksByTaskId` | `attio.delete` | always |
| `deleteV2CommentsByCommentId` | `attio.delete` | always |
| `deleteV2WorkspaceBlocklistAddressesByAddress` | `attio.delete` | always |
| `deleteV2MeetingsByMeetingId` | `attio.delete` | always |
| `deleteV2MeetingsByMeetingIdCallRecordingsByCallRecordingId` | `attio.delete` | always |
| `deleteV2FilesByFileId` | `attio.delete` | always |
| `deleteV2WebhooksByWebhookId` | `attio.delete` | always |
