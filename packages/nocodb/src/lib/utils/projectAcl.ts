export default {
  owner: '*',
  creator: '*',
  guest: {},
  editor: {
    xcAuditCreate: true,
    xcAttachmentUpload: true,
    xcVirtualTableList: true,
    xcMetaTablesImportZipToLocalFsAndDb: false,
    // testConnection:true,
    projectCreateByWeb: false,
    projectList: true,
    projectStop: false,
    projectDelete: false,
    projectRestart: false,
    projectStart: false,
    tableXcHooksGet: false,
    tableXcHooksSet: false,
    defaultRestHandlerCodeGet: false,
    xcMetaTablesExportDbToLocalFs: false,
    xcMetaTablesImportLocalFsToDb: false,
    xcMetaTablesExportDbToZip: false,
    xcMetaTablesReset: false,
    xcRoutesHandlerUpdate: false,
    xcRoutesMiddlewareUpdate: false,
    xcResolverHandlerUpdate: false,
    xcResolverMiddlewareUpdate: false,
    xcRpcHandlerUpdate: false,
    xcRpcPolicyGet: false,
    xcRoutesPolicyGet: false,
    rolesGet: true,
    xcResolverPolicyGet: false,
    rolesSaveOrUpdate: false,
    rolesDelete: false,
    tableXcModelGet: true,
    xcModelSet: false,
    xcRelationsGet: true,
    xcRelationsSet: false,
    xcModelSchemaSet: false,
    xcModelMessagesAndServicesSet: false,
    xcModelSwaggerDocSet: false,
    xcModelsEnable: false,
    xcViewModelsEnable: false,
    xcTableModelsEnable: false,
    xcFunctionModelsEnable: false,
    xcProcedureModelsEnable: false,
    xcModelsList: true,
    xcViewModelsList: true,
    xcProcedureModelsList: true,
    xcFunctionModelsList: true,
    xcTableModelsList: true,
    xcCronList: true,
    xcCronSave: false,
    cronDelete: false,
    xcAclGet: false,
    xcAclSave: false,
    xcAclAggregatedGet: false,
    xcAclAggregatedSave: false,
    xcDebugGet: false,
    xcDebugSet: false,
    xcVirtualRelationCreate: false,
    xcVirtualRelationDelete: false,
    xcRelationList: true,
    tableMetaCreate: true,
    tableMetaDelete: true,
    tableMetaRecreate: true,
    viewMetaCreate: true,
    viewMetaDelete: true,
    viewMetaRecreate: true,
    procedureMetaCreate: true,
    procedureMetaDelete: true,
    procedureMetaRecreate: true,
    functionMetaCreate: true,
    functionMetaDelete: true,
    functionMetaRecreate: true,


    tableCreateStatement: true,
    tableInsertStatement: true,
    tableUpdateStatement: true,
    tableSelectStatement: true,
    tableDeleteStatement: true,


    tableList: true,
    viewList: true,
    functionList: true,
    sequenceList: true,
    procedureList: true,
    columnList: true,
    triggerList: true,
    relationList: true,
    relationListAll: true,
    indexList: true,
    list: true,
    insert: false,
    tableCreate: false,
    viewCreate: false,
    functionCreate: false,
    sequenceCreate: false,
    procedureCreate: false,
    viewRead: true,
    functionRead: true,
    procedureRead: true,

    columnCreate: false,
    triggerCreate: false,
    relationCreate: false,
    indexCreate: false,
    tableUpdate: false,
    viewUpdate: false,
    functionUpdate: false,
    sequenceUpdate: false,
    procedureUpdate: false,
    columnUpdate: false,
    triggerUpdate: false,
    relationUpdate: false,
    indexUpdate: false,
    update: false,
    tableDelete: false,
    viewDelete: false,
    functionDelete: false,
    sequenceDelete: false,
    procedureDelete: false,
    columnDelete: false,
    triggerDelete: false,
    relationDelete: false,
    indexDelete: false,
    delete: false,

    defaultRestMiddlewareCodeGet: false,
    defaultResolverHandlerCodeGet: false,
    defaultResolverMiddlewareCode: false,
    defaultRpcServiceCodeGet: false,

    getKnexDataTypes: true,
    DB_PROJECT_OPEN_BY_WEB: true,
    PROJECT_READ_BY_WEB: true,
    projectGenerateBackend: true,
    projectGenerateBackendGql: true,
    projectGetTsPolicyPath: true,
    projectGetPolicyPath: true,
    importFresh: false,
    writeFile: false,
    projectGetGqlPolicyPath: true,
    handleApiCall: true,
    executeRawQuery: true,
    xcRoutesPolicyUpdate: false,
    xcResolverPolicyUpdate: false,
    xcRpcPolicyUpdate: false,
    migrationsList: false,
    migrationsUp: false,
    migrationsDown: false,
    migrationsToSql: false,
    projectHasDb: true,
    tableRename: false,
    testConnection: true,
    projectChangeEnv: true,

    xcRoutesPolicyAllGet: true,
    grpcProtoDownloadZip: true,
    projectUpdateByWeb: false,


    xcModelRowAuditAndCommentList: true,
    xcAuditCommentInsert: true,
    xcAuditModelCommentsCount: true
  },
  commenter: {
    xcVirtualTableList: true,
    projectList: true,
    PROJECT_READ_BY_WEB: true,


    'tableXcModelGet': true,
    'xcRelationList': true,
    'tableList': true,
    'viewList': true,
    'functionList': true,
    'sequenceList': true,
    'procedureList': true,
    'columnList': true,
    'triggerList': true,
    'relationList': true,
    'relationListAll': true,
    'indexList': true,
    'list': true,

    xcModelRowAuditAndCommentList: true,
    xcAuditCommentInsert: true,
    xcAuditModelCommentsCount: true
  }, viewer: {
    xcVirtualTableList: true,
    projectList: true,
    PROJECT_READ_BY_WEB: true,


    'tableXcModelGet': true,
    'xcRelationList': true,
    'tableList': true,
    'viewList': true,
    'functionList': true,
    'sequenceList': true,
    'procedureList': true,
    'columnList': true,
    'triggerList': true,
    'relationList': true,
    'relationListAll': true,
    'indexList': true,
    'list': true,
  },
  user: {
    projectList: true,
    testConnection: true,
    projectCreateByWeb: true,
    projectCreateByWebWithXCDB: true,
    xcPluginRead: true,
    projectStop: false,
    projectDelete: false,
    projectRestart: false,
    projectStart: false,
    xcMetaTablesImportZipToLocalFsAndDb: true,
    xcMetaTablesExportDbToZip: true
  }
}


const readOperations = [
  'testConnection',

  'rolesGet',
  'tableXcModelGet',

  'xcRelationsGet',

  'xcRelationList',
  'projectList',
  'tableList',
  'viewList',
  'functionList',
  'sequenceList',
  'procedureList',
  'columnList',
  'triggerList',
  'relationList',
  'relationListAll',
  'indexList',
  'list',

  'xcModelsList',
  'xcViewModelsList',
  'xcProcedureModelsList',
  'xcFunctionModelsList',
  'xcTableModelsList',
  'xcCronList',
  'tableCreateStatement',
  'tableInsertStatement',
  'tableUpdateStatement',
  'tableSelectStatement',
  'tableDeleteStatement',

  'viewRead',
  'functionRead',
  'procedureRead',
  'getKnexDataTypes',
  'DB_PROJECT_OPEN_BY_WEB',
  'PROJECT_READ_BY_WEB',
  'projectGenerateBackend',
  'projectGenerateBackendGql',
  'projectGetTsPolicyPath',
  'projectGetPolicyPath',
  'projectGetGqlPolicyPath',
  'handleApiCall',
  'executeRawQuery',
  'projectHasDb',
  'testConnection',
  'projectChangeEnv',
  'xcRoutesPolicyAllGet',
  'grpcProtoDownloadZip',

]

const writeOperations = [
  'tableMetaCreate',
  'tableMetaDelete',
  'tableMetaRecreate',
  'viewMetaCreate',
  'viewMetaDelete',
  'viewMetaRecreate',
  'procedureMetaCreate',
  'procedureMetaDelete',
  'procedureMetaRecreate',
  'functionMetaCreate',
  'functionMetaDelete',
  'functionMetaRecreate',
  'xcMetaTablesImportZipToLocalFsAndDb',
  'projectCreateByWeb',
  'projectStop',
  'projectDelete',
  'projectRestart',
  'projectStart',
  'tableXcHooksGet',
  'tableXcHooksSet',
  'xcVirtualRelationCreate',
  'xcVirtualRelationDelete',
  'defaultRestHandlerCodeGet',
  'xcMetaTablesExportDbToLocalFs',
  'xcMetaTablesImportLocalFsToDb',
  'xcMetaTablesExportDbToZip',
  'xcMetaTablesReset',
  'xcRoutesHandlerUpdate',
  'xcRoutesMiddlewareUpdate',
  'xcResolverHandlerUpdate',
  'xcResolverMiddlewareUpdate',
  'xcRpcHandlerUpdate',
  'xcRpcPolicyGet',
  'xcRoutesPolicyGet',
  'xcResolverPolicyGet',
  'rolesSaveOrUpdate',
  'rolesDelete',
  'xcModelSet',
  'xcRelationsSet',
  'xcModelSchemaSet',
  'xcModelMessagesAndServicesSet',
  'xcModelSwaggerDocSet',
  'xcModelsEnable',
  'xcViewModelsEnable',
  'xcTableModelsEnable',
  'xcFunctionModelsEnable',
  'xcProcedureModelsEnable',
  'xcCronSave',
  'cronDelete',
  'xcAclGet',
  'xcAclSave',
  'xcAclAggregatedGet',
  'xcAclAggregatedSave',
  'xcDebugGet',
  'xcDebugSet',
  'insert',
  'tableCreate',
  'viewCreate',
  'functionCreate',
  'sequenceCreate',
  'procedureCreate',
  'columnCreate',
  'triggerCreate',
  'relationCreate',
  'indexCreate',
  'tableUpdate',
  'viewUpdate',
  'functionUpdate',
  'sequenceUpdate',
  'procedureUpdate',
  'columnUpdate',
  'triggerUpdate',
  'relationUpdate',
  'indexUpdate',
  'update',
  'tableDelete',
  'viewDelete',
  'functionDelete',
  'sequenceDelete',
  'procedureDelete',
  'columnDelete',
  'triggerDelete',
  'relationDelete',
  'indexDelete',
  'delete',
  'defaultRestMiddlewareCodeGet',
  'defaultResolverHandlerCodeGet',
  'defaultResolverMiddlewareCode',
  'defaultRpcServiceCodeGet',
  'importFresh',
  'writeFile',
  'xcRoutesPolicyUpdate',
  'xcResolverPolicyUpdate',
  'xcRpcPolicyUpdate',
  'migrationsList',
  'migrationsUp',
  'migrationsDown',
  'migrationsToSql',
  'tableRename',
  'projectUpdateByWeb',
  'createSharedViewLink'
]

export {
  readOperations,
  writeOperations
}/**
 * @copyright Copyright (c) 2021, Xgene Cloud Ltd
 *
 * @author Naveen MR <oof1lab@gmail.com>
 * @author Pranav C Balan <pranavxc@gmail.com>
 *
 * @license GNU AGPL version 3 or any later version
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */
