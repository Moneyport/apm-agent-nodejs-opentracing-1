'use strict'

const apiCompatibilityChecks = require('@mojaloop/opentracing/lib/test/api_compatibility').default
const Tracer = require('../..')

const agent = require('elastic-apm-node').start()
apiCompatibilityChecks(() => new Tracer(agent), { skipBaggageChecks: true, skipInjectExtractChecks: true })
