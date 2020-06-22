using System;
using System.Net;

namespace Application.errors {
    public class RestException : Exception {

        public HttpStatusCode Code { get; set; }
        public Object Error { get; set; }

        public RestException (HttpStatusCode code, object error = null) {
            this.Error = error;
            this.Code = code;

        }
    }
}