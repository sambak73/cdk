import aws_cdk as core
import aws_cdk.assertions as assertions

from my_first_cdk.my_first_cdk_stack import MyFirstCdkStack

# example tests. To run these tests, uncomment this file along with the example
# resource in my_first_cdk/my_first_cdk_stack.py
def test_sqs_queue_created():
    app = core.App()
    stack = MyFirstCdkStack(app, "my-first-cdk")
    template = assertions.Template.from_stack(stack)

#     template.has_resource_properties("AWS::SQS::Queue", {
#         "VisibilityTimeout": 300
#     })
